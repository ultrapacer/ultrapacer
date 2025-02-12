/**
 * Times of day (in seconds since midnight) for sun events
 */
export interface SunEventTimes {
  /**
   * Seconds since midnight when the sun is at its lowest point (nadir)
   */
  nadir: number

  /**
   * Seconds since midnight at the beginning of civil twilight
   */
  dawn: number

  /**
   * Seconds since midnight at sunrise
   */
  sunrise: number

  /**
   * Seconds since midnight at the end of civil twilight
   */
  dusk: number

  /**
   * Seconds since midnight when the sun sets
   */
  sunset: number

  /**
   * Seconds since midnight when the sun is at solar noon
   */
  noon: number

  /**
   * Altitude of the sun at its lowest point
   */
  nadirAltitude: number
}

/**
 * Sun event type
 */
export type SunEventType = keyof SunEventTimes

export interface Event {
  start: Date
  lat: number
  lon: number
  timezone: string

  /**
   * Times of day (in seconds since midnight) for sun events
   */
  sun: SunEventTimes

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
