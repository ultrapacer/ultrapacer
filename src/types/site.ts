import { Types } from '../main'
import type { Course } from './course'

/**
 * Waypoint cutoff object
 */
type WaypointCutoff = { loop: number; time: number }

/**
 * Waypoint type
 */
export type SiteType = 'start' | 'finish' | 'aid' | 'water' | 'landmark' | 'junction' | 'other'

/**
 * Site data object
 */
export interface SiteData {
  /**
   * optional cutoffs for the site
   */
  cutoffs?: WaypointCutoff[]

  /**
   * optional description for the site
   */
  description?: string

  /**
   * optional id for the site
   * required when inputting plan delays
   */
  id?: string | symbol

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
  type: SiteType
}

/**
 * Site object
 */
export interface Site {
  /**
   * altitude of the site
   */
  readonly alt: number

  /**
   * course the site is associated with
   */
  readonly course: Course

  /**
   * optional cutoffs for the site
   */
  readonly cutoffs: WaypointCutoff[]

  /**
   * optional description for the site
   */
  readonly description?: string | undefined

  /**
   * optional id for the site
   */
  readonly id?: string | symbol | undefined

  /**
   * latitude of the site
   */
  readonly lat: number

  /**
   * longitude of the site
   */
  readonly lon: number

  /**
   * optional name for the site
   */
  readonly name?: string | undefined

  /**
   * percent of total distance along the track where the site is located
   */
  readonly percent: number

  /**
   * optional tier for the site
   * @deprecated - this has been replaced with course terrain model
   */
  readonly tier: number

  /**
   * type of site
   */
  readonly type: SiteType

  /**
   * waypoints associated with the site
   */
  readonly waypoints: Types.Waypoint[]

  /**
   * refresh the latitude, longitude, and altitude of the site
   */
  refreshLLA(): void
}
