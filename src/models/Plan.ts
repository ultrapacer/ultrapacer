import _, { pick } from 'lodash'

import { createDebug } from '../debug'
import { list as fKeys } from '../factors'
import { Strategy, StrategyValues } from '../factors/strategy'
import { areSameWaypoint } from '../util/areSameWaypoint'
import { interp, interpArray, req, rgte } from '../util/math'
import { Course, CourseCutoff } from './Course'
import { Event } from './Event'
import { Pacing } from './Pacing'
import { PlanPoint } from './PlanPoint'
import { PlanSplits } from './PlanSplits'
import { Waypoint } from './Waypoint'
import { DateWithTimezone } from './types'

const d = createDebug('models:Plan')

type DelaysInput = { waypoint: { site: string; loop: number }; delay: number }[]

type PlanMethod = 'np' | 'pace' | 'time'

export type PlanData = {
  cutoffMargin?: number

  delays?: DelaysInput

  heatModel?: { baseline: number; max: number }

  /**
   * Unique identifier for the plan
   */
  id?: string | null | number | symbol

  /**
   * Method for calculating target time
   */
  method: PlanMethod

  name?: string

  /**
   * Scales for factors
   */
  scales?: { altitude?: number; dark?: number }

  /**
   * Start date and timezone
   */
  start?: DateWithTimezone

  strategy?: StrategyValues

  target: number

  typicalDelay?: number
}

export class Plan {
  readonly course: Course

  get cutoffMargin() {
    return this._cutoffMargin
  }
  set cutoffMargin(value: number | undefined) {
    if (value === this._cutoffMargin) return
    this._cutoffMargin = value
    delete this._cutoffs
    this.invalidatePacing()
  }
  private _cutoffMargin?: number = 0

  get cutoffs() {
    if (this._cutoffs) return this._cutoffs

    this._cutoffs = this.cutoffMargin
      ? this.course.cutoffs.map((c) => new PlanCutoff(this, c, this.getPoint(c.loc, true)))
      : []

    // if any cutoffs are extraneous, delete them
    let i = 0
    while (this._cutoffs.length - 1 >= i) {
      const cutoff = this._cutoffs[i]
      if (this._cutoffs.find((c: { time: number }, j: number) => j > i && c.time <= cutoff.time)) {
        d(`get cutoffs: deleting extraneous cutoff at ${cutoff.loc} km`)
        this._cutoffs.splice(i, 1)
      } else i++
    }

    return this._cutoffs
  }
  private _cutoffs?: PlanCutoff[]

  /**
   * delay is sum of Plan.delays
   */
  get delay() {
    return _.sumBy(this.delays, 'delay')
  }

  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   */
  get delays(): PlanDelay[] {
    if (this._delays) return this._delays

    const delays = this.course.waypoints
      .map((waypoint) => {
        const wpd = this._specifiedDelays?.find((d) => areSameWaypoint(d.waypoint, waypoint))
        const delay = wpd ? wpd.delay : waypoint.hasTypicalDelay ? this.typicalDelay : 0
        return new PlanDelay(waypoint, delay)
      })
      .filter((d: { delay: number }) => d.delay > 0)
      .sort((a: { loc: number }, b: { loc: number }) => a.loc - b.loc)

    // if any delays are in duplicate locations, combine them
    let i = 0
    while (delays.length - 1 >= i) {
      if (i > 0 && delays[i].loc === delays[i - 1].loc) {
        d(`get delays: merging delay at ${delays[i].loc} km`)
        delays[i - 1].delay += delays[i].delay
        delays.splice(i, 1)
      } else i++
    }

    this._delays = delays

    return this._delays
  }
  set delays(value: DelaysInput) {
    if (_.isEqual(this._specifiedDelays, value)) return
    this._specifiedDelays = value
    delete this._delays
    this.invalidatePacing()
  }
  private _specifiedDelays: DelaysInput = []
  private _delays?: PlanDelay[]

  event: Event

  get events() {
    if (this._events) return this._events

    // create array of sun events during the course:
    d('calculating events.sun')
    const eventTimes: { event: string; elapsed: number }[] = []
    const startTimeOfDay = this.event.elapsedToTimeOfDay(0)
    const days = Math.ceil((startTimeOfDay + this.points[this.points.length - 1].elapsed) / 86400)
    for (let d = 0; d < days; d++) {
      const arr = [
        { event: 'dawn', time: this.event.sun.dawn },
        { event: 'sunrise', time: this.event.sun.sunrise },
        { event: 'sunset', time: this.event.sun.sunset },
        { event: 'dusk', time: this.event.sun.dusk }
      ]
      arr.forEach((e) => {
        // get elapsed time of the event:
        const elapsed = e.time - startTimeOfDay + 86400 * d

        // if it happens in the data, add it to the array
        if (elapsed >= 0 && elapsed <= this.points[this.points.length - 1].elapsed) {
          eventTimes.push({ event: e.event, elapsed })
        }
      })
    }
    // sort by elapsed time:
    eventTimes.sort((a, b) => a.elapsed - b.elapsed)

    // interpolate distances from elapsed times:
    const locs = interpArray(
      this.points.map((p) => p.elapsed),
      this.points.map((p) => p.loc),
      eventTimes.map((x) => x.elapsed)
    )
    const sun = eventTimes.map((s, i) => ({ ...s, loc: locs[i] }))

    this._events = { sun }

    return this._events
  }
  private _events?: { sun: { event: string; elapsed: number; loc: number }[] }

  get heatModel(): { start: number; stop: number; baseline: number; max: number } | undefined {
    return this._heatModel
  }
  set heatModel(value: { baseline: number; max: number } | undefined) {
    if (_.isEqual(pick(this._heatModel, ['baseline', 'max']), value)) return
    if (value)
      this._heatModel = {
        start: this.event.sun.sunrise + 1800,
        stop: this.event.sun.sunset + 7200,
        baseline: value.baseline,
        max: value.max
      }
    else delete this._heatModel
    this.invalidatePacing()
  }
  private _heatModel?: { start: number; stop: number; baseline: number; max: number } | undefined

  /**
   * Unique identifier for the plan
   */
  id?: string | null | number | symbol

  /**
   * Method for calculating target time
   */
  get method() {
    return this._method
  }
  set method(value: PlanMethod) {
    if (value === this._method) return
    this._method = value
    this.invalidatePacing()
  }
  private _method: PlanMethod

  /**
   * Display name for the plan
   */
  name?: string

  pacing: Pacing

  readonly points: PlanPoint[]

  /**
   * Scales for factors
   */
  get scales() {
    return this._scales
  }
  set scales(values: { altitude?: number; dark?: number } | undefined) {
    this._scales.altitude = values?.altitude || 1
    this._scales.dark = values?.dark || 1
  }
  private _scales: PlanScales = new PlanScales(this)

  /**
   * splits are calculaed on get
   */
  get splits() {
    if (this._splits) return this._splits

    d('creating splits')
    this._splits = new PlanSplits(this)

    return this._splits
  }
  private _splits?: PlanSplits

  set start(val: { date: Date; timezone: string }) {
    if (this.event.start.getTime() === val.date.getTime() && this.event.timezone === val.timezone)
      return
    this.event = new Event(val.date, val.timezone, this.points[0].lat, this.points[0].lon)
    this.invalidatePacing()
  }

  /**
   * Plan stats object
   */
  get stats() {
    if (this._stats) return this._stats

    // add in statistics
    // these are max and min values for each factor
    d('calculating stats.factors')
    const factors = _.fromPairs(
      fKeys.map((k: string) => {
        const values = this.points.map((p) => p.factors.get(k))
        return [
          k,
          {
            min: Number(_.min(values)),
            max: Number(_.max(values))
          }
        ]
      })
    )

    // time in sun zones:
    d('calculating stats.sun')
    const sun = {
      day: { time: 0, dist: 0 },
      twilight: { time: 0, dist: 0 },
      dark: { time: 0, dist: 0 }
    }
    let dloc = 0
    let dtime = 0
    this.points.forEach((x: { loc: number; elapsed: number; tod: number }, i: number) => {
      dloc = x.loc - (this.points[i - 1]?.loc || 0)
      dtime = x.elapsed - (this.points[i - 1]?.elapsed || 0)
      if (
        !isNaN(this.event.sun.dawn) &&
        !isNaN(this.event.sun.dusk) &&
        (x.tod <= this.event.sun.dawn || x.tod >= this.event.sun.dusk)
      ) {
        sun.dark.time += dtime
        sun.dark.dist += dloc
      } else if (x.tod < this.event.sun.sunrise || x.tod > this.event.sun.sunset) {
        sun.twilight.time += dtime
        sun.twilight.dist += dloc
      } else {
        sun.day.time += dtime
        sun.day.dist += dloc
      }
    })

    this._stats = { factors, sun }

    return this._stats
  }
  private _stats?: {
    factors: {
      [key: string]: {
        min: number
        max: number
      }
    }
    sun: {
      day: {
        time: number
        dist: number
      }
      twilight: {
        time: number
        dist: number
      }
      dark: {
        time: number
        dist: number
      }
    }
  }

  get strategy(): Strategy {
    return this._strategy
  }
  set strategy(values: StrategyValues) {
    if (
      values?.length === this._strategy.values.length &&
      values.every((v, i) => _.isEqual(v, this._strategy.values[i]))
    )
      return
    this._strategy = new Strategy(this, values)
    this.invalidatePacing()
  }
  private _strategy: Strategy

  /**
   * Target time in seconds
   */
  get target() {
    return this._target
  }
  set target(value: number) {
    if (value === this._target) return
    this._target = value
    this.invalidatePacing()
  }
  private _target: number

  /**
   * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
   */
  get typicalDelay() {
    return this._typicalDelay
  }
  set typicalDelay(value: number) {
    if (value === this._typicalDelay) return
    this._typicalDelay = value
    this.invalidatePacing()
  }
  private _typicalDelay: number = 0

  constructor(course: Course, data: PlanData) {
    this.course = course

    const event = data.start
      ? new Event(data.start.date, data.start.timezone, course.points[0].lat, course.points[0].lon)
      : course.event
    if (!event) throw new Error('Start date/timezone is required for either the plan or the course')
    this.event = event

    this.id = data.id

    this.pacing = new Pacing(this)

    this.points = this.course.points.map((point) => new PlanPoint(this, point))

    this._method = data.method
    this._target = data.target
    this.typicalDelay = data.typicalDelay || 0
    if (data.delays) this.delays = data.delays
    this.cutoffMargin = data.cutoffMargin
    this.scales = data.scales
    this._strategy = new Strategy(this, data.strategy)

    if (data.heatModel) this.heatModel = data.heatModel
    this.name = data.name
  }

  checkPacing() {
    d('checkPacing')
    if (!this.pacing.status?.complete) {
      d('checkPacing: calculate')
      this.pacing.calculate()
    }

    // this is mostly just to trigger the points getter
    if (!this.points?.length) throw new Error('No plan points')
    return true
  }

  clearCache() {
    d('clearCache')
    delete this._cutoffs
    delete this._splits
    delete this._stats
  }

  /**
   * get delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getDelayAtWaypoint(waypoint: Waypoint): number {
    return this.delays.find((d) => areSameWaypoint(d.waypoint, waypoint))?.delay || 0
  }

  /**
   * get typical delay at input Waypoint
   * @param waypoint - waypoint of interest
   * @returns delay (sec)
   */
  getTypicalDelayAtWaypoint(waypoint: Waypoint) {
    if (waypoint.hasTypicalDelay) return this.typicalDelay
    return 0
  }

  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The PlanPoint at input location.
   */
  getPoint(loc: number, insert: boolean = false) {
    // get and return it if already exists
    const i2 = this.points.findIndex((p) => rgte(p.loc, loc, 4))
    const p2 = this.points[i2]

    // if point exists, return it
    if (req(p2.loc, loc, 4)) return p2

    d(`getPoint: ${insert ? 'inserting' : 'creating'} new PlanPoint at ${loc}`)

    // define first point for interpolation
    const i1 = i2 - 1
    const p1 = this.points[i1]

    // create a new point
    const point = new PlanPoint(this, this.course.getPoint(loc, insert))

    // add in interpolated time values if they exist
    if (!isNaN(p1.time) && !isNaN(p2.time)) {
      const delay = p2.elapsed - p2.time - (p1.elapsed - p1.time)
      point.time = interp(p1.loc, p2.loc, p1.time + delay, p2.time, p2.loc)
      point.elapsed = p2.elapsed - (p2.time - point.time)
      if (this.event.start) point.tod = this.event.elapsedToTimeOfDay(point.elapsed)
    }

    if (insert) this.points.splice(i2, 0, point)

    return point
  }

  invalidatePacing() {
    d('invalidatePacing')
    this.pacing.invalidate()
    delete this._splits
    delete this._stats
  }
}

class PlanDelay {
  delay: number
  waypoint: Waypoint

  constructor(waypoint: Waypoint, delay: number) {
    this.waypoint = waypoint
    this.delay = delay
  }

  get loc() {
    return this.waypoint.loc
  }
}

class PlanCutoff {
  plan: Plan
  courseCutoff: CourseCutoff
  point: PlanPoint

  constructor(plan: Plan, courseCutoff: CourseCutoff, point: PlanPoint) {
    this.plan = plan
    this.courseCutoff = courseCutoff
    this.point = point
  }

  get waypoint() {
    return this.courseCutoff.waypoint
  }
  get loc() {
    return this.courseCutoff.loc
  }
  get time() {
    return (
      this.courseCutoff.time -
      Math.max(this.plan.cutoffMargin || 0, this.plan.getDelayAtWaypoint(this.waypoint))
    )
  }
}

class PlanScales {
  plan: Plan
  private _altitude: number = 1
  get altitude() {
    return this._altitude
  }
  set altitude(value) {
    if (value === this._altitude) return
    this._altitude = value
    this.plan.invalidatePacing()
  }
  private _dark: number = 1
  get dark() {
    return this._dark
  }
  set dark(value) {
    if (value === this._dark) return
    this._dark = value
    this.plan.invalidatePacing()
  }

  constructor(plan: Plan) {
    this.plan = plan
  }
}
