import { Factors } from '../factors'
import { Types } from '../main'
import { CoursePoint } from './CoursePoint'
import { PaceChunk } from './PaceChunk'

/**
 * PlanPoint object for use in a plan, including pacing and time data
 */
export class PlanPoint extends CoursePoint {
  private _plan: Types.Plan

  _chunk?: PaceChunk

  /**
   * delay in seconds at this point (not cumulative)
   */
  delay: number = 0

  /**
   * elapsed time in seconds
   * does not include delay from this point
   */
  elapsed: number = 0

  /**
   * combined pacing factor at this point
   */
  get factor() {
    return this.factors?.combined
  }

  /**
   * pacing factors at this point
   */
  factors: Factors = new Factors()

  /**
   * normalized pace at this point (from last point) in seconds per kilometer
   */
  get np() {
    if (!this._chunk) throw new Error('PlanPoint._chunk not defined')
    return this._chunk?.np
  }

  /**
   * pace at this point (from last point) in seconds per kilometer
   */
  get pace() {
    return this.np * this.factor
  }

  /**
   * source (parent) course point
   */
  source: CoursePoint

  /**
   * moving time in seconds
   */
  time: number = 0

  /**
   * time of day in seconds
   */
  tod: number = 0

  constructor(plan: Types.Plan, point: Types.CoursePoint) {
    super(plan.course, point, point.loop)

    this._plan = plan
    this.source = point
  }
}
