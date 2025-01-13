export interface SunEvent {
  nadir: number
  dawn: number
  sunrise: number
  dusk: number
  sunset: number
  noon: number
  nadirAltitude: number
}

export interface Event {
  start: Date
  lat: number
  lon: number
  timezone: string
  sun: SunEvent

  /**
   * get a date object at [seconds] from start
   * @param seconds - seconds from start
   */
  dateAtElapsed(seconds: number): Date

  /**
   * get seconds since midnight for an input elapsed amount of time since start
   * @param elapsed - elapsed time
   */
  elapsedToTimeOfDay(elapsed: number): number
}
