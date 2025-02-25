import _ from 'lodash'
import { sprintf } from 'sprintf-js'

import { createDebug } from '../debug'
import { rollup } from '../factors'
import { Types } from '../main'
import { PaceChunk } from './PaceChunk'

const d = createDebug('Pacing')

export class Pacing implements Types.Pacing {
  chunks: Types.PaceChunk[] = []
  plan: Types.Plan

  constructor(plan: Types.Plan) {
    this.plan = plan
  }

  clearCache() {
    d('clearCache')
    delete this._factor
    delete this._factors
  }

  get elapsed() {
    d('elapsed:get')
    return this.plan.points[this.plan.points.length - 1].elapsed
  }

  get pace() {
    d('pace:get')
    return (this.elapsed - this.plan.delay) / this.plan.course.dist
  }

  private _factor?: number
  get factor() {
    if (this._factor) return this._factor

    d('factor:update')

    if (this.chunks)
      this._factor = _.sum(this.chunks.map((c) => c.factor * c.dist)) / this.plan.course.dist

    return this._factor || 1
  }
  clearFactor() {
    delete this._factor
  }

  private _factors?: Types.Factors
  get factors() {
    d('factors:get')
    if (!this._factors) {
      d('factors:update')

      // rollup individual factors:
      this._factors = rollup(this.chunks)
    }
    return this._factors
  }

  /**
   * check if this pacing is current
   */
  get isCurrent() {
    return this.version === this.plan.version
  }

  get np() {
    d('np:get')
    return this.pace / this.factor
  }

  get moving() {
    return this.elapsed - this.plan.delay
  }

  get status() {
    const result = {
      complete: this.chunks?.length > 0,
      errorMessage: undefined as undefined | string,
      success: this.chunks?.filter((c) => !c.status?.success).length === 0,
      chunks: this.chunks.length,
      iterations: this.chunks.map((c) => c.status?.iterations || 0)
    }
    if (!result.success) {
      result.errorMessage = this.chunks
        .filter((c) => c.status && !c.status?.success)
        .map((c, i) => `Chunk ${i + 1}: ${c.status!.errorMessage}`)
        .join(' | ')
    }
    return result
  }

  /**
   * last time this pacing was updated
   */
  version?: number

  calculate() {
    const d2 = d.extend('calculate')
    d2('exec')

    // clear some cached things
    d2('clearing cache')
    this.clearCache()

    // clear out any interpolated points from previous runs
    while (this.plan.points.find((p) => p.interpolated)) {
      const i = this.plan.points.findIndex((p) => p.interpolated)
      this.plan.points.splice(i, 1)
    }

    d2('adding points at each terrain factor break')
    this.plan.course.terrain?.forEach((tf) =>
      this.plan.getPoint(tf.percents[0] * this.plan.course.dist, true)
    )

    d2('adding points at each cutoff')
    if (this.plan.cutoffMargin) {
      this.plan.cutoffs?.forEach((c) => {
        this.plan.getPoint(c.loc, true)
      })
    }

    // assign delays to points
    this.plan.points
      .filter((p) => p.delay)
      .forEach((p) => {
        p.delay = 0
      })
    this.plan.delays?.forEach((d) => {
      const p = this.plan.getPoint(d.loc, true)
      p.delay = d.delay
    })

    d2('creating pace chunks')
    this.initChunks()

    const cutoffs = [null, ..._.reverse([...(this.plan.cutoffs || [])]), null]

    cutoffs.forEach((cutoff) => {
      while (this.chunks.find((c) => !c.status)) {
        this.calcChunks()
        this.validateChunks()
      }

      // now test cutoff
      if (!cutoff) return true
      const point = this.plan.getPoint(cutoff.loc)
      if (point.elapsed - cutoff.time > 0.5) {
        d2(`cutoff at ${cutoff.loc} missed`)
        const chunk = this.chunks[0]
        if (_.last(chunk.points) === point) {
          d2(`setting cutoff at ${cutoff.loc}`)
          chunk.constraints = [0, cutoff.time]
          delete chunk.status
        } else {
          this.splitChunk(chunk, point, cutoff.time)
        }
      }
    })

    // make sure that if are are using a dynamic constraint at the end that it gets updates again
    if (
      _.isFunction(this.chunks[this.chunks.length - 1].constraints[1]) &&
      this.chunks.length > 2
    ) {
      d2('rerunning last chunk')
      this.chunks[this.chunks.length - 1].calculate()
    }

    d(`pacing status=${this.status.success ? 'PASS' : 'FAIL'}.`)

    // clear out any interpolated points from previous runs
    while (this.plan.points.find((p) => p.interpolated)) {
      const i = this.plan.points.findIndex((p) => p.interpolated)
      this.plan.points.splice(i, 1)
    }

    this.version = this.plan.version
  }

  /**
   * initialize pacing chunks array
   */
  initChunks() {
    let elapsed
    switch (this.plan.method) {
      case 'time':
        elapsed = this.plan.target
        break
      case 'pace':
        elapsed = this.plan.target * this.plan.course.dist + this.plan.delay
        break
      case 'np':
        elapsed = () => {
          return this.plan.target * (this.factor || 1) * this.plan.course.dist + this.plan.delay
        }
        break
      default:
        throw new Error(`Incorrect pacing method ${this.plan.method}`)
    }

    this.chunks = [new PaceChunk(this.plan, this.plan.points, [0, elapsed], this.plan.delay)]

    // assign the chunk to all points
    this.plan.points.forEach((p) => {
      p._chunk = this.chunks[0]
    })
  }

  /**
   * calculate pacing for each pacing chunk
   */
  calcChunks() {
    d('calcChunks')
    this.clearCache()
    this.chunks.filter((chunk) => !chunk.status).forEach((chunk) => chunk.calculate())
  }

  /**
   * make sure chunks nps increasing monotincally and merge if needed
   */
  validateChunks() {
    let i = 1
    while (i <= this.chunks.length - 1) {
      if (this.chunks[i].np < this.chunks[i - 1].np)
        this.mergeChunks(this.chunks[i - 1], this.chunks[i])
      else i++
    }
  }

  /**
   * split pacing chunk; mutates chunks array
   * @param chunk - PaceChunk to split
   * @param point - point to split at
   * @param elapsed - elapsed time at split
   */
  splitChunk(chunk: Types.PaceChunk, point: Types.PlanPoint, elapsed: number) {
    const d2 = d.extend('split')

    // need to split chunks
    d2(`breaking chunks at ${point.loc} km`)

    // find index of cutoff point
    const cpi = chunk.points.findIndex((p) => p === point)

    // get delay from start up to cutoff point
    const delay = _.round(point.elapsed - point.time)

    // create new chunk
    const newChunk = new PaceChunk(this.plan, chunk.points.slice(0, cpi + 1), [0, elapsed], delay)

    // assign the new chunk to all its points
    newChunk.points
      .filter((p, i) => i < newChunk.points.length - 1)
      .forEach((p) => {
        p._chunk = newChunk
      })

    this.chunks.unshift(newChunk)

    // update 2nd portion of chunk:
    // set elapsed lower bound to cutoff time
    chunk.constraints[0] = elapsed
    // remove delay thats part of former chunk
    chunk.delay -= delay
    // slice out latter portion of points
    chunk.points = chunk.points.slice(cpi)
    // clear status
    delete chunk.status
  }

  /**
   * merge two sequential chunks together, mutates chunks array
   * @param a - first chunk
   * @param b - second chunk
   */
  mergeChunks(a: Types.PaceChunk, b: Types.PaceChunk) {
    const i = this.chunks.findIndex((c) => c === a)
    const j = this.chunks.findIndex((c) => c === b)

    if (j - i !== 1) throw new Error('chunks must be sequential')

    d(sprintf('calcChunks: merging %i&%i (%.2f&%.2f)', i, j, a.np, b.np))
    a.points.pop()
    a.points.push(...b.points)
    a.delay += b.delay
    delete a.status
    a.points.forEach((p) => {
      p._chunk = a
    })
    a.constraints = [a.constraints[0], b.constraints[1]]
    this.chunks.splice(j, 1)

    // recalculate the chunk
    a.calculate()
  }
}
