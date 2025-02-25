import _ from 'lodash'
import { latlon as LatLon } from 'sgeo'

import { createDebug } from '../debug'
import { Types } from '../main'
import { round } from '../util/math'
import { Point, TrackPoint } from './Point'
import { getGrades } from './Points/getGrades'
import { getLocations } from './Points/getLocations'
import { getSmoothedProfile } from './Points/getSmoothedProfile'
import { interpolatePoint } from './Points/interpolate'

const d = createDebug('models:Track')

export class Track implements Types.Track {
  dist: number
  gain: number
  loss: number
  points: Types.TrackPoint[]

  constructor(llas: Types.TrackData) {
    d('Creating new Track object')

    const points = llas.map((p) => new Point(p))

    const locations = getLocations(points)

    const grades = getGrades(points, locations)

    this.points = points.map((p, i) => new TrackPoint(p, locations[i], grades[i]))

    d(`set-points - ${points.length} points`)

    d('Calculating')
    this.dist = this.points[this.points.length - 1].loc
    let gain = 0
    let loss = 0
    let delta = 0
    let last = this.points[0].alt
    this.points.forEach((p) => {
      delta = p.alt - last
      if (delta < 0) {
        loss += delta
      } else {
        gain += delta
      }
      last = p.alt
    })
    this.gain = gain
    this.loss = loss
  }

  get start() {
    return _.pick(this.points[0], ['alt', 'lat', 'lon'])
  }

  get finish() {
    return _.pick(this.points[this.points.length - 1], ['alt', 'lat', 'lon'])
  }

  getLLA(location: number): { lat: number; lon: number; alt: number } {
    // if track has loops, just look at location within first loop (eg track)
    if (location > this.dist) location = location % this.dist

    let point
    if (location === 0) point = this.points[0]
    else {
      const i = this.points.findIndex((p) => p.loc >= location)
      point = interpolatePoint(this.points[i - 1], this.points[i], location)
    }
    return _.pick(point, ['lat', 'lon', 'alt'])
  }

  getNearestPoint(latlon: LatLon, start: Types.Point, limit: number) {
    const steps = 5
    let jj = this.points.findIndex((p) => p === start)
    let p = this.points[jj]
    let min = 0

    while (limit > 0.025) {
      const size = limit / steps
      const ps = [p]

      // loop thru incremental steps:
      for (let i = 1; i <= steps; i++) {
        const l = p.loc + size * i
        if (l <= this.dist) {
          while (this.points[jj + 1].loc < l && jj < this.points.length - 1) {
            jj++
          }
          ps.push(this.points[jj])
        }
      }

      // get an array of distances from reference latlon:
      const dists = ps.map((x) => {
        return Number(latlon.distanceTo(x.latlon))
      })

      // find the minimum distance:
      min = Math.min(...dists)
      const imin = dists.findIndex((d) => d === min)

      // set the new point to the one w/ min distance:
      p = ps[imin]

      // downsize iteration
      limit = limit / steps
    }
    return {
      point: p,
      delta: min
    }
  }

  reduceDensity(spacing: number = 0.025, length: number = this.points.length / 2) {
    const d2 = d.extend('reduceDensity')
    // reduce density of points for processing
    if (this.dist / spacing > length / 2) {
      d2('Does not meet criteria')
      return this
    }

    // only reformat if it cuts the size down in half
    const len = this.dist
    const numpoints = Math.floor(len / spacing) + 1
    const xs = Array(numpoints)
      .fill(0)
      .map((e, i) => round(i++ * spacing, 3))
    if (xs[xs.length - 1] < len) {
      xs.push(len)
    }
    const adj = getSmoothedProfile(
      this.points.map((p) => p.loc),
      this.points.map((p) => p.alt),
      xs,
      2 * spacing
    )
    // TODO, this may be really slow with the update to the getLLA routine
    const llas = xs
      .map((x) => this.getLLA(x))
      .map((lla, i) => ({
        lat: round(lla.lat, 6),
        lon: round(lla.lon, 6),
        alt: round(adj[i].alt, 2)
      }))
    const track = new Track(llas)

    d2(`Reduced from ${this.points.length} to ${track.points.length} points.`)
    return track
  }
}

export function createTrackFromArrays(lat: number[], lon: number[], alt: number[]) {
  const llas = lat.map((x, i) => ({ lat: lat[i], lon: lon[i], alt: alt[i] }))
  return new Track(llas)
}
