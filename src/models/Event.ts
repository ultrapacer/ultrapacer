import { getPosition, getTimes } from 'suncalc'

import { Types } from '../main'
import { dateToTODSeconds } from '../util/dateToTODSeconds'

class SunEvent implements Types.SunEvent {
  nadir: number = 0
  dawn: number = 0
  sunrise: number = 0
  dusk: number = 0
  sunset: number = 0
  noon: number = 0
  nadirAltitude: number = 0

  constructor(obj: SunEvent) {
    Object.assign(this, obj)
  }
}

export class Event implements Types.Event {
  readonly start: Date
  readonly lat: number
  readonly lon: number
  readonly timezone: string
  readonly sun: Types.SunEvent
  readonly startTime: number

  constructor(start: Date, timezone: string, lat: number, lon: number) {
    this.start = start
    this.lat = lat
    this.lon = lon
    this.timezone = timezone

    const times = getTimes(this.start, this.lat, this.lon)
    const nadirPosition = getPosition(times.nadir, this.lat, this.lon)

    this.sun = new SunEvent({
      nadir: dateToTODSeconds(times.nadir, this.timezone),
      dawn: dateToTODSeconds(times.dawn, this.timezone),
      sunrise: dateToTODSeconds(times.sunrise, this.timezone),
      dusk: dateToTODSeconds(times.dusk, this.timezone),
      sunset: dateToTODSeconds(times.sunset, this.timezone),
      noon: dateToTODSeconds(times.solarNoon, this.timezone),
      nadirAltitude: (nadirPosition.altitude * 180) / Math.PI
    })

    this.startTime = dateToTODSeconds(this.start, this.timezone)
  }

  dateAtElapsed(seconds: number): Date {
    const d = new Date(this.start)
    d.setTime(d.getTime() + seconds * 1000)
    return d
  }

  elapsedToTimeOfDay(elapsed: number): number {
    return (this.startTime + elapsed) % 86400
  }
}
