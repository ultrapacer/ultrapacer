import { Factors } from '../factors'
import { CoursePoint } from './CoursePoint'
import { PaceChunk } from './PaceChunk'
import { Plan } from './Plan'

export class PlanPoint {
  _chunk?: PaceChunk
  _plan: Plan
  private _point: CoursePoint

  get alt() {
    return this._point.alt
  }

  delay: number = 0

  /**
   * elapsed time in seconds
   */
  elapsed: number = 0

  get factor() {
    return this.factors?.combined
  }

  factors: Factors = new Factors()

  get grade() {
    return this._point.grade
  }

  get lat() {
    return this._point.lat
  }

  get latlon() {
    return this._point.latlon
  }

  get loc() {
    return this._point.loc
  }

  get lon() {
    return this._point.lon
  }

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
    this._plan = plan
    this._point = point
  }
}
