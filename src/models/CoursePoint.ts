import { Factors } from '../factors/Factors'
import { Course } from './Course'
import { TrackPoint } from './Point'

export class CoursePoint extends TrackPoint {
  _source: TrackPoint

  factors: Factors = new Factors()

  readonly course: Course

  /**
   * zero-indexed loop number
   */
  loop: number

  /**
   * grade, scaled, as a percentage
   */
  get grade(): number {
    return (
      this._source.grade * (this._source.grade > 0 ? this.course.gainScale : this.course.lossScale)
    )
  }

  /**
   * location, scaled, with loop, in kilometers
   */
  get loc(): number {
    let l = this._source.loc * this.course.distScale
    if (this.loop) l += this.course.loopDist * this.loop
    return l
  }

  constructor(course: Course, point: TrackPoint, loop: number) {
    super(point, point.loc, point.grade)

    this.course = course
    this.loop = loop
    this._source = point
  }
}
