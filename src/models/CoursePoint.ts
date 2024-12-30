import { Factors } from '../factors/Factors'
import { Course } from './Course'
import { Point, TrackPoint } from './Point'

export class CoursePoint extends TrackPoint {
  _data: TrackPoint

  factors: Factors = new Factors()

  course: Course
  loop: number

  get grade(): number {
    const g = this._data?.grade
    return g * (g > 0 ? this.course.gainScale : this.course.lossScale)
  }

  get loc(): number {
    let l = this._data.loc * this.course.distScale
    if (this.loop) l += this.course.loopDist * this.loop
    return l
  }

  constructor(course: Course, point: TrackPoint, loop: number) {
    super(point, point.loc, point.grade)

    this.course = course
    this.loop = loop
    this._data = point
  }
}
