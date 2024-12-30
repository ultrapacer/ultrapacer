import { Factors } from '../factors/Factors';
import { Course } from './Course';
import { TrackPoint } from './Point';
export declare class CoursePoint extends TrackPoint {
    _source: TrackPoint;
    factors: Factors;
    readonly course: Course;
    /**
     * zero-indexed loop number
     */
    loop: number;
    /**
     * grade, scaled, as a percentage
     */
    get grade(): number;
    /**
     * location, scaled, with loop, in kilometers
     */
    get loc(): number;
    constructor(course: Course, point: TrackPoint, loop: number);
}
