import { latlon as LatLon } from 'sgeo'

type LLA = [number, number, number]
export class Point {
  _data:
    | {
        alt: number
        lat: number
        lon: number
      }
    | Point

  get alt(): number {
    return this._data.alt
  }

  get lat(): number {
    return this._data.lat
  }

  get latlon(): LatLon {
    return 'latlon' in this._data ? this._data.latlon : new LatLon(this.lat, this.lon)
  }

  get lon(): number {
    return this._data.lon
  }

  constructor(arg: Point | LLA) {
    this._data = Array.isArray(arg)
      ? {
          lat: arg[0],
          lon: arg[1],
          alt: arg[2]
        }
      : arg
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
