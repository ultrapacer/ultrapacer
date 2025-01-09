import _ from 'lodash'

import { createDebug } from '../debug'
import { Course } from './Course'
import { Waypoint } from './Waypoint'

const d = createDebug('models:Waypoint')

type WaypointCutoff = { loop: number; time: number }
export type WaypointType = 'start' | 'finish' | 'aid' | 'water' | 'landmark' | 'junction' | 'other'

/**
 * Site data object
 */
export type SiteData = {
  /**
   * optional cutoffs for the site
   */
  cutoffs?: WaypointCutoff[]

  /**
   * optional description for the site
   */
  description?: string

  /**
   * id for the site
   */
  id: string | symbol

  /**
   * optional name for the site
   */
  name?: string | undefined

  /**
   * percent of total distance along the track where the site is located
   */
  percent: number

  /**
   * optional tier for the site
   * @deprecated - this has been replaced with course terrain model
   */
  tier?: number

  /**
   * type of site
   */
  type: WaypointType
}

/**
 * Site update data object
 */
export type SiteUpdateData = Partial<SiteData> & NonNullable<Partial<Pick<SiteData, 'percent'>>>

export class Site {
  /**
   * internal cache object
   * gets deleted and regenerated when version changes
   */
  private _cache: {
    _version?: number
    alt?: number
    lat?: number
    lon?: number
    waypoints?: Waypoint[]
  } = {}
  get cache() {
    if (this._cache?._version === this.version) return this._cache
    this._cache = { _version: this.version }
    return this._cache
  }

  /**
   * internal data object
   */
  private _data: SiteData

  /**
   * altitude of the site
   */
  get alt() {
    if ('alt' in this._cache) return this._cache.alt
    this.refreshLLA()
    return Number(this._cache.alt)
  }

  /**
   * course the site is associated with
   */
  readonly course: Course

  /**
   * optional cutoffs for the site
   */
  get cutoffs() {
    return this._data.cutoffs || []
  }

  /**
   * optional description for the site
   */
  get description() {
    return this._data.description
  }

  /**
   * optional id for the site
   */
  get id() {
    return this._data.id
  }

  /**
   * latitude of the site
   */
  get lat() {
    if ('lat' in this._cache) return this._cache.lat
    this.refreshLLA()
    return Number(this._cache.lat)
  }

  /**
   * longitude of the site
   */
  get lon() {
    if ('lon' in this._cache) return this._cache.lon
    this.refreshLLA()
    return Number(this._cache.lon)
  }

  /**
   * optional name for the site
   */
  get name() {
    return this._data.name
  }

  /**
   * percent of total distance along the track where the site is located
   */
  get percent() {
    switch (this.type) {
      case 'start':
        return 0
      case 'finish':
        return 1
      default:
        return this._data.percent
    }
  }
  set percent(v) {
    this._data.percent = v
  }

  /**
   * optional tier for the site
   * @deprecated - this has been replaced with course terrain model
   */
  get tier() {
    return this._data.tier || 1
  }

  /**
   * type of site
   */
  get type() {
    return this._data.type
  }

  /**
   * Version of course (not currently able to update site directly)
   */
  get version() {
    return this.course.version
  }

  /**
   * array of waypoints for the site
   */
  get waypoints() {
    if ('waypoints' in this._cache) return this._cache.waypoints

    d(`generating waypoints array: ${this.name}`)
    if (this.type === 'finish') {
      this._cache.waypoints = [new Waypoint(this, this.course.loops)]
    } else {
      this._cache.waypoints = _.range(this.course.loops).map((x) => new Waypoint(this, x + 1))
    }
    return this._cache.waypoints
  }

  constructor(course: Course, data: SiteData) {
    this.course = course
    this._data = data
  }

  /**
   * refresh the latitude, longitude, and altitude of the site
   */
  refreshLLA() {
    d('refreshLLA')

    let lat, lon, alt

    // if start use start lla
    if (this.type === 'start') {
      ;({ lat, lon, alt } = this.course.track.points[0])

      // if finish use finish lla
    } else if (this.type === 'finish') {
      ;({ lat, lon, alt } = this.course.track.points[this.course.track.points.length - 1])

      // otherwise interpolate the lla from track array
    } else {
      ;({ lat, lon, alt } = this.course.track.getLLA(this.percent * this.course.track.dist))
    }
    // update site values
    this._cache.lat = lat
    this._cache.lon = lon
    this._cache.alt = alt
  }
}
