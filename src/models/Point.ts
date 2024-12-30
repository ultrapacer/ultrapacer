import { latlon as LatLon } from 'sgeo'

export type LLA = {
  alt: number
  lat: number
  lon: number
}
export function isSourcePoint(arg: LLA | Point): arg is Point {
  return 'latlon' in arg
}

export class Point {
  _source:
    | {
        alt: number
        lat: number
        lon: number
      }
    | Point

  get alt(): number {
    return this._source.alt
  }

  get lat(): number {
    return this._source.lat
  }

  get latlon(): LatLon {
    return isSourcePoint(this._source) ? this._source.latlon : new LatLon(this.lat, this.lon)
  }

  get lon(): number {
    return this._source.lon
  }

  constructor(arg: Point | LLA) {
    this._source = arg
  }
}

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
