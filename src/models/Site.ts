import _ from 'lodash'

import { createDebug } from '../debug'
import { Course } from './Course'
import { Waypoint } from './Waypoint'

const d = createDebug('models:Waypoint')

type WaypointCutoff = { loop: number; time: number }
export type WaypointType = 'start' | 'finish' | 'aid' | 'water' | 'landmark' | 'junction' | 'other'

export type SiteData = {
  id: string | symbol
  type: WaypointType
  name?: string | undefined
  description?: string
  cutoffs?: WaypointCutoff[]
  percent: number
  tier?: number
}

export class Site {
  private _waypoints?: Waypoint[]
  private _lat: number = NaN
  private _lon: number = NaN
  private _alt: number = NaN

  constructor(course: Course, data: SiteData) {
    this._data = { percent: data.percent }

    this.course = course

    this.id = data.id
    this.type = data.type
    this.name = data.name
    if (data.cutoffs) this.cutoffs = data.cutoffs
    if (data.tier !== undefined) this.tier = data.tier
    if (data.description) this.description = data.description

    d(`constructor: ${this.name}`)
  }

  _data: {
    percent: number
  }
  course: Course
  cutoffs: WaypointCutoff[] = []
  id: string | symbol
  name?: string | undefined
  tier: number = 1
  type: WaypointType
  description?: string

  clearCache() {
    d(`clearCache: ${this.name}`)
    delete this._waypoints
    this._lat = NaN
    this._lon = NaN
    this._alt = NaN
  }

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

  get waypoints() {
    if (this._waypoints) return this._waypoints
    d(`generating waypoints array: ${this.name}`)
    if (this.type === 'finish') {
      this._waypoints = [new Waypoint(this, this.course.loops)]
    } else {
      this._waypoints = _.range(this.course.loops).map((x) => new Waypoint(this, x + 1))
    }
    return this._waypoints
  }

  get lat() {
    if (_.isNaN(this._lat)) this.refreshLLA()
    return this._lat
  }

  get lon() {
    if (_.isNaN(this._lon)) this.refreshLLA()
    return this._lon
  }

  get alt() {
    if (_.isNaN(this._alt)) this.refreshLLA()
    return this._alt
  }

  // function updates the lat/lon/alt of a waypoint
  refreshLLA() {
    d('refreshLLA')

    let lat, lon, alt, ind

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
    this._lat = lat
    this._lon = lon
    this._alt = alt

    // TODO. clearing splits; not sure if this is the best place to put this
    this.course.clearCache(1)
  }
}
