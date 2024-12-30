import _, { pick } from 'lodash'

import { createDebug } from '../debug'
import { typeList as fKeys, factorKeys } from '../factors'
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

/**
 * Represents the data structure for a plan.
 */
export type PlanData = {
  cutoffMargin?: number | undefined

  delays?: DelaysInput | undefined

  heatModel?: { baseline: number; max: number } | undefined

  /**
   * Unique identifier for the plan
   */
  id?: string | null | number | symbol | undefined

  /**
   * Method for calculating target time
   */
  method: PlanMethod

  name?: string | undefined

  /**
   * Scales for factors
   */
  scales?: { altitude?: number; dark?: number } | undefined

  /**
   * Start date and timezone
   */
  start?: DateWithTimezone | undefined

  strategy?: StrategyValues | undefined

  target: number

  typicalDelay?: number | undefined
}

type PlanUpdateData = Partial<PlanData> & NonNullable<Partial<Pick<PlanData, 'method' | 'target'>>>

type PlanStats = {
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

type PlanEvents = {
  sun: { event: string; elapsed: number; loc: number }[]
}

type PlanHeatModel =
  | {
      start: number
      stop: number
      baseline: number
      max: number
    }
  | undefined

type PlanScales =
  | {
      altitude: number
      dark: number
    }
  | undefined

export class Plan {
  private _cache: {
    cutoffs?: PlanCutoff[]
    delays?: PlanDelay[]
    event?: Event
    events?: PlanEvents
    heatModel?: PlanHeatModel
    scales?: PlanScales
    stats?: PlanStats
    strategy?: Strategy
    version?: number
  } = {}
  get cache() {
    if (this._cache?.version === this.version) return this._cache
    this._cache = { version: this.version }
    return this._cache
  }

  private _data: PlanData

  readonly course: Course

  get cutoffMargin() {
    return this._data.cutoffMargin
  }

  /**
   * cutoffs array is calculated on get as a combination of the course cutoffs and the plan points
   * gets re-calculated if the course or plan version changes
   */
  get cutoffs() {
    if ('cutoffs' in this.cache) return this.cache.cutoffs

    this.cache.cutoffs = this.cutoffMargin
      ? this.course.cutoffs.map((c) => new PlanCutoff(this, c, this.getPoint(c.loc, true)))
      : []

    // if any cutoffs are extraneous, delete them
    let i = 0
    while (this.cache.cutoffs.length - 1 >= i) {
      const cutoff = this.cache.cutoffs[i]
      if (
        this.cache.cutoffs.find((c: { time: number }, j: number) => j > i && c.time <= cutoff.time)
      ) {
        d(`get cutoffs: deleting extraneous cutoff at ${cutoff.loc} km`)
        this.cache.cutoffs.splice(i, 1)
      } else i++
    }

    return this.cache.cutoffs
  }

  /**
   * delay is sum of Plan.delays
   */
  get delay() {
    return _.sumBy(this.delays, 'delay')
  }

  /**
   * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
   * gets re-calculated if the course or plan version changes
   */
  get delays(): PlanDelay[] {
    if ('delays' in this.cache) return this.cache.delays

    const delays = this.course.waypoints
      .map((waypoint) => {
        const wpd = this._data.delays?.find((d) => areSameWaypoint(d.waypoint, waypoint))
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

    this.cache.delays = delays

    return this.cache.delays
  }

  /**
   * Event object
   * gets re-calculated if the course or plan version changes
   */
  get event(): Event {
    if ('event' in this.cache) return this.cache.event

    if (this._data.start)
      return (this.cache.event = new Event(
        this._data.start.date,
        this._data.start.timezone,
        this.points[0].lat,
        this.points[0].lon
      ))
    if (this.course.event) return (this.cache.event = this.course.event)
    throw new Error('Start date/timezone is required for either the plan or the course')
  }

  get events() {
    if ('events' in this.cache) return this.cache.events

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

    this.cache.events = { sun }

    return this.cache.events
  }

  get heatModel(): { start: number; stop: number; baseline: number; max: number } | undefined {
    if ('heatModel' in this.cache) return this.cache.heatModel

    if (this._data.heatModel)
      return (this.cache.heatModel = {
        start: this.event.sun.sunrise + 1800,
        stop: this.event.sun.sunset + 7200,
        baseline: this._data.heatModel.baseline,
        max: this._data.heatModel.max
      })
    return (this.cache.heatModel = undefined)
  }

  /**
   * Unique identifier for the plan
   */
  get id() {
    return this._data.id
  }

  /**
   * Method for calculating target time
   */
  get method() {
    return this._data.method
  }

  /**
   * Display name for the plan
   */
  get name() {
    return this._data.name
  }

  pacing: Pacing = new Pacing(this)

  readonly points: PlanPoint[]

  /**
   * Scales for factors
   */
  get scales() {
    if ('scales' in this.cache) return this.cache.scales
    if (this._data.scales)
      return (this.cache.scales = {
        altitude: this._data.scales.altitude || 1,
        dark: this._data.scales.dark || 1
      })
    return (this.cache.scales = undefined)
  }

  /**
   * splits
   */
  readonly splits = new PlanSplits(this)

  /**
   * Plan stats object
   */
  get stats() {
    if ('stats' in this.cache) return this.cache.stats

    // add in statistics
    // these are max and min values for each factor
    d('calculating stats.factors')
    const factors = _.fromPairs(
      factorKeys.map((k) => {
        const values = this.points.map((p) => p.factors[k])
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

    this.cache.stats = { factors, sun }

    return this.cache.stats
  }

  get strategy(): Strategy {
    if ('strategy' in this.cache) return this.cache.strategy
    return (this.cache.strategy = new Strategy(this, this._data.strategy))
  }

  /**
   * Target time in seconds
   */
  get target() {
    return this._data.target
  }

  /**
   * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
   */
  get typicalDelay(): number {
    return this._data.typicalDelay ?? 180
  }

  /**
   * Version of plan update (non trivial changes that affect pacing)
   */
  _version: number = 0

  /**
   * Version of course & plan update (non trivial changes that affect pacing)
   */
  get version() {
    return this._version + this.course.version
  }

  constructor(course: Course, data: PlanData) {
    this.course = course
    this._data = data

    this.points = this.course.points.map((point) => new PlanPoint(this, point))

    this._version = 1
  }

  checkPacing() {
    d('checkPacing')
    if (!this.pacing.status?.complete || !this.pacing.isCurrent) {
      d('checkPacing: calculate')
      this.pacing.calculate()
    }

    // this is mostly just to trigger the points getter
    if (!this.points?.length) throw new Error('No plan points')
    return true
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

  update(data: PlanUpdateData) {
    // check for invalid null or undefined values
    const keys = ['target', 'method'] as (keyof PlanUpdateData)[]
    const k = keys.find((k) => k in data && _.isNil(data[k]))
    if (k) throw new Error(`Plan.${k} cannot be set to null or undefined`)

    Object.assign(this._data, data)
    this._version++
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
