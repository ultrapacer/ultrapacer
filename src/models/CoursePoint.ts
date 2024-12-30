import { Factors } from '../factors/Factors'
import { Course } from './Course'
import { TrackPoint } from './Point'

function isCoursePoint(point: TrackPoint | CoursePoint): point is CoursePoint {
  return '_course' in point
}

/**
 * CoursePoint object for use in a course, including scaling and loop data
 */
export class CoursePoint extends TrackPoint {
  private _course: Course

  /**
   * pacing factors at this point
   */
  factors: Factors = new Factors()

  /**
   * grade, scaled, as a percentage
   */
  get grade(): number {
    // if source is a course point, it is already scaled
    if (isCoursePoint(this.source)) return this.source.grade

    return (
      this.source.grade * (this.source.grade > 0 ? this._course.gainScale : this._course.lossScale)
    )
  }

  /**
   * location, scaled, with loop, in kilometers
   */
  get loc(): number {
    // if source is a course point, it is already scaled/looped
    if (isCoursePoint(this.source)) return this.source.loc

    let l = this.source.loc * this._course.distScale
    if (this.loop) l += this._course.loopDist * this.loop
    return l
  }

  /**
   * loop number (zero-indexed)
   */
  loop: number

  /**
   * source (parent) point
   */
  readonly source: TrackPoint | CoursePoint

  constructor(course: Course, point: TrackPoint, loop: number) {
    super(point, point.loc, point.grade)

    this._course = course
    this.loop = loop
    this.source = point
  }
}
