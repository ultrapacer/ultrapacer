import { Factors } from '../factors'
import { CoursePoint } from './CoursePoint'
import { PaceChunk } from './PaceChunk'
import { Plan } from './Plan'

export class PlanPoint extends CoursePoint {
  _chunk?: PaceChunk
  _plan: Plan
  _source: CoursePoint

  delay: number = 0

  /**
   * elapsed time in seconds
   */
  elapsed: number = 0

  get factor() {
    return this.factors?.combined
  }

  factors: Factors = new Factors()

  /**
   * np for a point is the same as its parent chunk
   */
  get np() {
    if (!this._chunk) throw new Error('PlanPoint._chunk not defined')
    return this._chunk?.np
  }

  get pace() {
    return this.np * this.factor
  }

  /**
   * moving time in seconds
   */
  time: number = 0

  /**
   * time of day in seconds
   */
  tod: number = 0

  constructor(plan: Plan, point: CoursePoint) {
    super(plan.course, point, point.loop)
    this._source = point
    this._plan = plan
  }
}
