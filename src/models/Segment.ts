import _ from 'lodash'

import { Factors, rollup } from '../factors'
import { Types } from '../main'
import { isNumber } from '../util/isNumber'
import { Plan } from '.'
import { Course } from './Course'
import { CoursePoint } from './CoursePoint'
import { PlanPoint } from './PlanPoint'

/**
 * create Factors for segment for points between point1 and point2
 * @param points - course or plan points array
 * @param point1 - start point
 * @param point2 - finish point
 * @returns Factors
 */
function rollupPointFactors(points: PlanPoint[], point1: PlanPoint, point2: PlanPoint): Factors {
  // points may not be in points array, so insert them if they are interpolated points:
  points = [...points]
  if (point1.interpolated) points.splice(points.findIndex((p) => p.loc > point1.loc) - 1, 0, point1)
  if (point2.interpolated) points.splice(points.findIndex((p) => p.loc > point2.loc) - 1, 0, point2)

  const filteredPoints = points.filter(
    (p, i) =>
      i >= points.findIndex((p) => p === point1) && i <= points.findIndex((p) => p === point2)
  )

  const segs = filteredPoints.map((p, i) => ({
    factors: p.factors,
    dist: i === filteredPoints.length - 1 ? 0 : filteredPoints[i + 1].loc - filteredPoints[i].loc
  }))
  segs.pop()

  return rollup(segs)
}

class Segment {
  constructor(obj: {
    point1: CoursePoint | PlanPoint
    point2: CoursePoint | PlanPoint
    gain: number
    loss: number
    grade: number
    name?: string
  }) {
    this.point1 = obj.point1
    this.point2 = obj.point2
    this.gain = obj.gain
    this.loss = obj.loss
    this.grade = obj.grade
    if (obj.name) this._name = obj.name
  }

  point1: CoursePoint | PlanPoint
  point2: CoursePoint | PlanPoint

  /**
   * elevation gain (m) over segment
   */
  gain: number

  /**
   * elevation loss (m) over segment
   */
  loss: number

  /**
   * average grade (%) over segment
   */
  grade: number

  /**
   * waypoint at end of segment
   */
  waypoint?: Types.Waypoint

  private _name?: string
  /**
   * name of segment
   */
  get name() {
    return this._name || this.waypoint?.name || undefined
  }

  /**
   * location along course (km) at start of segment
   */
  get start() {
    return this.point1.loc
  }

  /**
   * distance (km) of segment
   */
  get dist() {
    return this.point2.loc - this.point1.loc
  }

  /**
   * location along course (km) at end of segment
   */
  get end() {
    return this.point2.loc
  }

  /**
   * altitude (m) at end of segment
   */
  get alt() {
    return this.point2.alt
  }
}

export class CourseSegment extends Segment {
  private _course: Course

  point1: CoursePoint
  point2: CoursePoint

  constructor(
    course: Course,
    obj: {
      point1: CoursePoint
      point2: CoursePoint
      gain: number
      loss: number
      grade: number
    }
  ) {
    super(obj)
    this._course = course
    this.point1 = obj.point1
    this.point2 = obj.point2
  }
}

export class PlanSegment extends Segment {
  private _plan: Plan

  point1: PlanPoint
  point2: PlanPoint

  constructor(
    plan: Plan,
    obj: {
      point1: PlanPoint
      point2: PlanPoint
      gain: number
      loss: number
      grade: number
    }
  ) {
    super(obj)
    this._plan = plan
    this.point1 = obj.point1
    this.point2 = obj.point2
  }

  /**
   * moving pace (s/km) over segment
   */
  get pace() {
    if (!this.time) return 0
    return this.time / this.dist
  }

  /**
   * delay (s) over segment
   */
  get delay() {
    if (
      !isNumber(this.point1.elapsed) ||
      !isNumber(this.point2.elapsed) ||
      !isNumber(this.point1.time) ||
      !isNumber(this.point2.time)
    )
      return undefined
    return this.point2.elapsed - this.point1.elapsed - (this.point2.time - this.point1.time)
  }

  /**
   * elapsed time (s) over segment
   */
  get elapsed() {
    return this.point2.elapsed
  }

  /**
   * moving time (s) over segment
   */
  get time() {
    if (!_.isNumber(this.point1.time) || !_.isNumber(this.point2.time)) return undefined
    return this.point2.time - this.point1.time
  }

  /**
   * time of day (s) at end of segment
   */
  get tod() {
    return this.point2.tod
  }

  // dummy setters, just in case:
  set delay(v) {}
  set pace(v) {}
  set elapsed(v) {}
  set time(v) {}
  set tod(v) {}

  private _factors?: Factors
  get factors() {
    return (
      this._factors ||
      (this._factors = rollupPointFactors(this._plan.points, this.point1, this.point2))
    )
  }
}
