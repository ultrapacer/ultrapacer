import { latlon as LatLon } from 'sgeo'

/**
 * Latitude, Longitude, Altitude (LLA) object for creation of a point
 */
export type LLA = {
  /**
   * altitude in meters
   */
  alt: number
  /**
   * latitude in degrees
   */
  lat: number
  /**
   * longitude in degrees
   */
  lon: number
}

export function isSourcePoint(arg: LLA | Point): arg is Point {
  return 'latlon' in arg
}

/**
 * Point object for use as a basis in a track or course
 */
export class Point {
  /**
   * altitude in meters
   */
  get alt(): number {
    return this.source.alt
  }
  set alt(value: number) {
    this.source.alt = value
  }

  /**
   * latitude in degrees
   */
  get lat(): number {
    return this.source.lat
  }
  set lat(value: number) {
    this.source.lat = value
  }

  /**
   * latitude and longitude object (see sgeo)
   */
  get latlon(): LatLon {
    return isSourcePoint(this.source) ? this.source.latlon : new LatLon(this.lat, this.lon)
  }

  /**
   * longitude in degrees
   */
  get lon(): number {
    return this.source.lon
  }
  set lon(value: number) {
    this.source.lon = value
  }

  /**
   * source (parent) point/data
   */
  source:
    | {
        alt: number
        lat: number
        lon: number
      }
    | Point

  constructor(arg: Point | LLA) {
    this.source = arg
  }
}

/**
 * TrackPoint object for use in a track, with additional data (loc, grade)
 */
export class TrackPoint extends Point {
  private _trackData: {
    loc: number
    grade: number
  }
  get grade() {
    return this._trackData.grade
  }
  get loc() {
    return this._trackData.loc
  }

  constructor(arg: Point | LLA, loc: number, grade: number) {
    super(arg)
    this._trackData = { grade, loc }
  }
}
