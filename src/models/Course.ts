import _ from 'lodash'

import { createDebug } from '../debug'
import { req, rgte, rlt } from '../util/math'
import { CoursePoint } from './CoursePoint'
import { CourseSplits } from './CourseSplits'
import { interpolatePoint } from './Points/interpolate'
import { Site, type SiteData } from './Site'
import { Track } from './Track'
import { Waypoint } from './Waypoint'
import { DateWithTimezone } from './types'
import { Event } from './Event'

const d = createDebug('models:Course')

// course constructor will pass through all fields; use
// this array to omit certain keys from passing through
const disallowed = ['track', 'dist', 'gain', 'loss', 'cache', 'distance', 'start']

export type TerrainTypeIndex = 'paved' | 'dirt road' | 'doubletrack' | 'singletrack' | 'technical'
export const terrainTypes: { type: TerrainTypeIndex; value: number }[] = [
  { type: 'paved', value: 0 },
  { type: 'dirt road', value: 4 },
  { type: 'doubletrack', value: 8 },
  { type: 'singletrack', value: 15 },
  { type: 'technical', value: 30 }
]

export type CourseData = {
  loops?: number
  dist?: number | null
  gain?: number | null
  loss?: number | null
  sites?: SiteData[]

  /**
   * Start date and timezone
   */
  start?: DateWithTimezone

  terrain?: {
    percent: number
    value: number | TerrainTypeIndex | { value: number; type: string }
  }[]
}

export class Course {
  event?: Event
  name?: string
  _cache: {
    splits?: []
    stats?: object
  } = {}

  constructor(track: Track, data: CourseData) {
    this._track = track

    if (data.loops) this.loops = data.loops

    if (data.dist) this._distOverride = data.dist
    if (data.gain) this._gainOverride = data.gain
    if (data.loss) this._lossOverride = data.loss

    if (data.start)
      this.event = new Event(
        data.start.date,
        data.start.timezone,
        track.points[0].lat,
        track.points[0].lon
      )

    // other fields just pass along:
    const keys = Object.keys(data).filter((k) => !disallowed.includes(k))
    Object.assign(this, _.pick(data, keys))
  }

  private _loops: number = 1
  get loops() {
    return this._loops
  }
  set loops(v) {
    this._loops = v
    this.clearCache(2)
  }

  /**
   * Total distance of course (in km)
   */
  get dist(): number {
    return this._dist || (this._dist = this._distOverride || this.track.dist * this.loops)
  }
  set dist(v) {
    d(`overriding dist to ${v}`)
    this._distOverride = v
    this.version++
    this.clearCache(2)
  }
  private _dist?: number
  private _distOverride?: number

  /**
   * Distance scale of course (in km), relative to calculated track distance
   */
  get distScale() {
    return this._distOverride ? this._distOverride / (this.track.dist * this.loops) : 1
  }

  /**
   * Total gain of course (in meters)
   */
  get gain(): number {
    return this.gain || (this._gain = this._gainOverride || this.track.gain * this.loops)
  }
  set gain(v) {
    d(`overriding gain to ${v}`)
    this._gainOverride = v
    this.version++
    this.clearCache(2)
  }
  private _gain?: number
  private _gainOverride?: number

  /**
   * Gain scale of course (in meters), relative to calculated track gain
   */
  get gainScale() {
    return this._gainOverride ? this._gainOverride / (this.track.gain * this.loops) : 1
  }

  /**
   * Total loss of course (in meters)
   */
  get loss(): number {
    return this._loss || (this._loss = this._lossOverride || this.track.loss * this.loops)
  }
  set loss(v) {
    d(`overriding loss to ${v}`)
    this._lossOverride = v
    this.version++
    this.clearCache(2)
  }
  private _loss?: number
  private _lossOverride?: number

  /**
   * Loss scale of course (in meters), relative to calculated track loss
   */
  get lossScale() {
    return this._lossOverride ? this._lossOverride / (this.track.loss * this.loops) : 1
  }
  get loopDist() {
    return this.dist / this.loops
  }
  get loopGain() {
    return this.gain / this.loops
  }
  get loopLoss() {
    return this.loss / this.loops
  }

  private _sites: Site[] = [
    new Site(this, {
      id: String(_.random(10000, 20000)),
      name: 'Start',
      type: 'start',
      percent: 0
    }),
    new Site(this, {
      id: String(_.random(30000, 40000)),
      name: 'Finish',
      type: 'finish',
      percent: 1
    })
  ]
  get sites() {
    return this._sites
  }
  set sites(data) {
    this._sites = data.map((site) => new Site(this, site))
    this.clearCache(1)
  }

  /**
   * Version of course update (non-trivial changes that affect pacing)
   */
  version: number = 0

  clearCache(level = 1) {
    // level 1 means route itself does not change (eg, changes to waypoints and trivial changes to course)
    // level 2 means route itself changes (eg, track, loops, dist, gain, loss)
    d(`clearCache-${level}`)

    delete this._cutoffs
    delete this._splits
    delete this._stats
    delete this._terrain
    delete this._waypoints

    if (level === 2) {
      delete this._dist
      delete this._gain
      delete this._loss
      delete this._points
      this.sites.forEach((site) => {
        site.clearCache()
      })
    }
  }

  private _waypoints?: Waypoint[]
  get waypoints(): Waypoint[] {
    if (this._waypoints) return this._waypoints

    if (!this.track?.dist) return []

    let waypoints: Waypoint[] = []
    this.sites.forEach((site) => {
      waypoints.push(...site.waypoints)
    })
    waypoints = waypoints.sort((a, b) => a.loc - b.loc)

    this._waypoints = waypoints
    return this._waypoints
  }

  private _track: Track
  set track(v) {
    this._track = v
    this.clearCache(2)
  }
  get track() {
    return this._track
  }

  private _points?: CoursePoint[]
  get points(): CoursePoint[] {
    if (this._points) return this._points

    d('generating points array')

    this._points = new Array(this.track.points.length * this.loops)
    for (let l = 0; l < this.loops; l++) {
      for (let i = 0; i < this.track.points.length; i++) {
        this.points[i + l * this.track.points.length] = new CoursePoint(
          this,
          this.track.points[i],
          l
        )
      }
    }

    return this._points
  }

  set points(v) {
    throw new Error('cannot set points directly')
  }

  /**
   * Finds and optionally inserts a point at an input location.
   *
   * @param loc - The location (in km) to determine value.
   * @param insert - Whether to also insert a created point into the points array. Defaults to false.
   * @returns The CoursePoint at input location.
   */
  getPoint(loc: number, insert: boolean = false): CoursePoint {
    const i2 = this.points.findIndex((p) => rgte(p.loc, loc, 4))
    const p2 = this.points[i2]

    // if point exists, return it
    if (req(p2.loc, loc, 4)) return p2

    d(`getPoint: ${insert ? 'inserting' : 'creating'} new CoursePoint at ${loc}`)

    // define first point for interpolation
    const i1 = i2 - 1
    const p1 = this.points[i1]

    // create a new point
    const trackPoint = interpolatePoint(p1.point, p2.point, (loc % this.loopDist) / this.distScale)
    const point = new CoursePoint(this, trackPoint, Math.floor(loc / this.loopDist))

    if (insert) this.points.splice(i2, 0, point)

    return point
  }

  get terrain(): TerrainElement[] {
    return this._terrain || []
  }
  set terrain(value: CourseData['terrain']) {
    if (!value) {
      this._terrain = []
      return
    }

    value = [...value]
    value.sort((a, b) => a.percent - b.percent)

    this._terrain = value.map((x, i) => {
      const v = _.isNumber(x.value)
        ? x.value
        : _.isString(x.value)
          ? terrainTypes.find((t) => t.type === x.value)?.value || 0
          : x.value.value
      const type = typeof x === 'string' ? x : _.isObject(x.value) ? x.value.type : undefined
      const res: TerrainElement = {
        value: v,
        type,
        percents: [x.percent, value[i + 1]?.percent || 1]
      }
      return res
    })
  }
  private _terrain?: TerrainElement[]

  private _cutoffs?: CourseCutoff[]
  get cutoffs() {
    if (this._cutoffs) return this._cutoffs

    this._cutoffs = this.waypoints.filter((wp) => wp.cutoff).map((wp) => new CourseCutoff(wp))

    return this._cutoffs
  }

  private _splits?: CourseSplits
  get splits() {
    if (this._splits) return this._splits

    this._splits = new CourseSplits(this)

    return this._splits
  }

  // calculate max and min values along course
  private _stats?: {
    altitude: { avg: number; max: number; min: number }
    grade: { avg: number; max: number; min: number }
    terrain: { avg: number; max: number; min: number; maxDist: number; minDist: number }
  }
  get stats() {
    if (this._stats) return this._stats

    d('stats:calculate')

    const alts = this.track.points.map((p) => p.alt)
    const grades = this.track.points.map((p) => p.grade)
    const terrains = this.terrain.map((tf) => tf.value / 100 + 1)

    const stats = {
      altitude: {
        avg:
          _.sum(
            this.track.points.map((p, i) => p.alt * (p.loc - (this.track.points[i - 1]?.loc || 0)))
          ) / this.track.dist,
        max: _.max(alts) || 0,
        min: _.min(alts) || 0
      },
      grade: {
        avg:
          (this.track.points[this.track.points.length - 1].alt - this.track.points[0].alt) /
          this.track.dist /
          10,
        max: _.max(grades) || 0,
        min: _.min(grades) || 0
      },
      terrain: {
        avg:
          (_.sumBy(this.terrain, (tF) => (tF.percents[1] - tF.percents[0]) * this.dist * tF.value) /
            this.dist +
            100) /
          100,
        max: _.max(terrains) || 0,
        min: _.min(terrains) || 0,
        maxDist: 0,
        minDist: 0
      }
    }

    // get distances for max/min terrain
    const terrainFactorDist = (val: number): number =>
      this.terrain.reduce(
        (a, b) => (b.value / 100 + 1 === val ? a + (b.percents[1] - b.percents[0]) * this.dist : a),
        0
      )
    Object.assign(stats.terrain, {
      maxDist: terrainFactorDist(stats.terrain.max),
      minDist: terrainFactorDist(stats.terrain.min)
    })

    this._stats = stats
    return stats
  }

  locationsToBreaks(locations: number[]) {
    const tmp = locations.filter((b) => b > 0 && rlt(b, this.dist, 4))
    tmp.unshift(0)

    // map to {start, end} format
    const breaks = tmp.map((b, i) => ({ start: b, end: tmp[i + 1] || this.dist }))
    return breaks
  }
}

export class CourseCutoff {
  waypoint: Waypoint

  constructor(waypoint: Waypoint) {
    this.waypoint = waypoint
  }

  get loc() {
    return this.waypoint.loc
  }
  get time(): number {
    if (!this.waypoint.cutoff) throw new Error('Invalid cutoff')
    return this.waypoint.cutoff
  }
}

interface TerrainElement {
  /**
   * Terrain value, not factor (eg, this is a number, eg 5, not a factor like 1.05)
   */
  value: number
  type?: string
  percents: [number, number]
}
