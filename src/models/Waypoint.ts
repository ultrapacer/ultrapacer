import _ from 'lodash'

import { areSameWaypoint } from '../util/areSameWaypoint'
import { CourseSegment, PlanSegment } from './Segment'
import { Site } from './Site'

export class Waypoint {
  constructor(site: Site, loop: number = 1) {
    this._data = {}
    this.site = site
    this.loop = loop
  }

  _data: object
  loop: number
  site: Site

  get course() {
    return this.site.course
  }

  get name() {
    if (this.loop >= 2 && this.type !== 'finish') {
      return `${this.site.name} ${this.loop}`
    } else {
      return this.site.name
    }
  }

  get description() {
    return this.site.description
  }

  get loc() {
    return (this.site.percent + this.loop - 1) * this.course.loopDist
  }

  set loc(v) {
    if (!_.isNumber(v)) throw new Error('Wrong format for Waypoint.loc')
    if (this.type === 'start') {
      this.site.percent = 0
    } else if (this.type === 'finish') {
      this.site.percent = 1
    } else {
      this.site.percent = (v / this.course.loopDist) % 1
    }
  }

  get lat() {
    return this.site.lat
  }

  get lon() {
    return this.site.lon
  }

  get alt() {
    return this.site.alt
  }

  /**
   * @deprecated - this has been replaced with course terrain model
   */
  get tier() {
    return this.site.tier || 1
  }

  get type() {
    return this.site.type
  }

  get hasTypicalDelay() {
    return Boolean(
      this.type === 'aid' || this.type === 'water' || (this.loop >= 2 && this.type === 'start')
    )
  }

  get cutoff() {
    return this.site.cutoffs?.find((c) => c.loop === this.loop)?.time
  }

  matchingSegment(segments: CourseSegment[]): CourseSegment | PlanSegment | undefined {
    return segments.find((s) => s.waypoint && areSameWaypoint(this, s.waypoint))
  }
}
