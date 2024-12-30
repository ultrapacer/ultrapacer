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

export type TerrainTypeIndex = 'paved' | 'dirt road' | 'doubletrack' | 'singletrack' | 'technical'
export const terrainTypes: { type: TerrainTypeIndex; value: number }[] = [
  { type: 'paved', value: 0 },
  { type: 'dirt road', value: 4 },
  { type: 'doubletrack', value: 8 },
  { type: 'singletrack', value: 15 },
  { type: 'technical', value: 30 }
]

/**
 * Course data
 */
export type CourseData = {
  /**
   * Number of loops
   */
  loops?: number | undefined

  /**
   * Specified (override) distance of course (in km)
   */
  dist?: number | undefined

  /**
   * Specified (override) gain of course (in meters)
   */
  gain?: number | undefined

  /**
   * Specified (override) loss of course (in meters)
   */
  loss?: number | undefined

  /**
   * List of sites along course to create waypoints
   */
  sites?: SiteData[] | undefined

  /**
   * Start date and timezone
   */
  start?: DateWithTimezone | undefined

  /**
   * Terrain data
   */
  terrain?:
    | {
        percent: number
        value: number | TerrainTypeIndex | { value: number; type?: string }
      }[]
    | undefined
}

/**
 * Course update data
 */
export type CourseUpdateData = Partial<CourseData>

/**
 * Course class
 */
export class Course {
  private _cache: {
    cutoffs?: CourseCutoff[]
    dist?: number
    event?: Event
    gain?: number
    loss?: number
    points?: CoursePoint[]
    sites?: Site[]
    splits?: CourseSplits
    stats?: CourseStats
    terrain?: TerrainElement[]
    waypoints?: Waypoint[]
    version?: number
  } = {}
  get cache() {
    if (this._cache?.version === this.version) return this._cache
    this._cache = { version: this.version }
    return this._cache
  }

  /**
   * Course data
   */
  private _data: CourseData

  /**
   * Course cutoffs
   */
  get cutoffs(): CourseCutoff[] {
    if ('cutoffs' in this.cache) return this.cache.cutoffs

    this.cache.cutoffs = this.waypoints.filter((wp) => wp.cutoff).map((wp) => new CourseCutoff(wp))

    return this.cache.cutoffs
  }

  /**
   * Total distance of course (in km)
   */
  get dist(): number {
    if ('dist' in this.cache) return this.cache.dist
    this.cache.dist = this._data.dist || this.track.dist * this.loops
    return this.cache.dist
  }

  /**
   * Distance scale of course (in km), relative to calculated track distance
   */
  get distScale() {
    return this._data.dist ? this._data.dist / (this.track.dist * this.loops) : 1
  }

  /**
   * Event object
   */
  get event(): Event | undefined {
    if ('event' in this.cache) return this.cache.event

    if (this._data.start)
      return (this.cache.event = new Event(
        this._data.start.date,
        this._data.start.timezone,
        this.points[0].lat,
        this.points[0].lon
      ))
  }

  /**
   * Total gain of course (in meters)
   */
  get gain(): number {
    if ('gain' in this.cache) return this.cache.gain
    this.cache.gain = this._data.gain || this.track.gain * this.loops
    return this.cache.gain
  }

  /**
   * Gain scale of course (in meters), relative to calculated track gain
   */
  get gainScale() {
    return this._data.gain ? this._data.gain / (this.track.gain * this.loops) : 1
  }

  /**
   * Distance of each loop (in km)
   */
  get loopDist() {
    return this.dist / this.loops
  }

  /**
   * Gain of each loop (in meters)
   */
  get loopGain() {
    return this.gain / this.loops
  }

  /**
   * Loss of each loop (in meters)
   */
  get loopLoss() {
    return this.loss / this.loops
  }

  /**
   * Number of loops for the track
   */
  get loops() {
    return this._data.loops || 1
  }

  /**
   * Total loss of course (in meters)
   */
  get loss(): number {
    if ('loss' in this.cache) return this.cache.loss
    this.cache.loss = this._data.loss || this.track.loss * this.loops
    return this.cache.loss
  }

  /**
   * Loss scale of course (in meters), relative to calculated track loss
   */
  get lossScale() {
    return this._data.loss ? this._data.loss / (this.track.loss * this.loops) : 1
  }

  /**
   * Course name
   */
  name?: string

  /**
   * Course points
   */
  get points(): CoursePoint[] {
    if ('points' in this.cache) return this.cache.points

    d('generating points array')

    this.cache.points = new Array(this.track.points.length * this.loops)
    for (let l = 0; l < this.loops; l++) {
      for (let i = 0; i < this.track.points.length; i++) {
        this.points[i + l * this.track.points.length] = new CoursePoint(
          this,
          this.track.points[i],
          l
        )
      }
    }

    return this.cache.points
  }

  /**
   * Course sites
   */
  get sites() {
    if ('sites' in this.cache) return this.cache.sites

    this.cache.sites = this._data.sites?.map((site) => new Site(this, site)) || [
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
    if (
      this.cache.sites.length < 2 ||
      !this.cache.sites.find((s) => s.type === 'start') ||
      !this.cache.sites.find((s) => s.type === 'finish')
    )
      throw new Error('Course must have at least a start and finish')

    return this.cache.sites
  }

  /**
   * Course splits
   */
  get splits() {
    if ('splits' in this.cache) return this.cache.splits

    this.cache.splits = new CourseSplits(this)

    return this.cache.splits
  }

  /**
   * Course stats
   */
  get stats(): CourseStats {
    if ('stats' in this.cache) return this.cache.stats

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

    this.cache.stats = stats

    return stats
  }

  /**
   * Terrain data
   */
  get terrain(): TerrainElement[] {
    if ('terrain' in this.cache) return this.cache.terrain

    if (this._data.terrain) {
      const value = [...this._data.terrain]
      value.sort((a, b) => a.percent - b.percent)

      this.cache.terrain = value.map((x, i) => {
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
    } else {
      this.cache.terrain = []
    }

    return this.cache.terrain
  }

  /**
   * Track object
   */
  readonly track: Track

  /**
   * Version of course update (non-trivial changes that affect pacing)
   */
  version: number = 0

  /**
   * Course waypoints
   */
  get waypoints(): Waypoint[] {
    if ('waypoints' in this.cache) return this.cache.waypoints

    if (!this.track?.dist) return []

    let waypoints: Waypoint[] = []
    this.sites.forEach((site) => {
      waypoints.push(...site.waypoints)
    })
    waypoints = waypoints.sort((a, b) => a.loc - b.loc)

    this.cache.waypoints = waypoints

    return this.cache.waypoints
  }

  constructor(track: Track, data: CourseData) {
    d('constructor')
    this.track = track
    this._data = data

    this.version = 1
  }

  update(data: CourseUpdateData) {
    d('update')
    Object.assign(this._data, data)
    this.version++

    this.sites.forEach((site) => {
      site.clearCache()
    })
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
    const trackPoint = interpolatePoint(
      p1._source,
      p2._source,
      (loc % this.loopDist) / this.distScale
    )
    const point = new CoursePoint(this, trackPoint, Math.floor(loc / this.loopDist))

    if (insert) this.points.splice(i2, 0, point)

    return point
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

export interface CourseStats {
  altitude: { avg: number; max: number; min: number }
  grade: { avg: number; max: number; min: number }
  terrain: { avg: number; max: number; min: number; maxDist: number; minDist: number }
}

interface TerrainElement {
  /**
   * Terrain value, not factor (eg, this is a number, eg 5, not a factor like 1.05)
   */
  value: number

  /**
   * Terrain type, if applicable
   */
  type?: string | undefined

  /**
   * Percent range of terrain
   */
  percents: [number, number]
}
