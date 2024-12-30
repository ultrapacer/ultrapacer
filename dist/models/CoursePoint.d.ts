import { Factors } from '../factors/Factors';
import { Course } from './Course';
import { TrackPoint } from './Point';
export declare class CoursePoint extends TrackPoint {
    _data: TrackPoint;
    factors: Factors;
    course: Course;
    loop: number;
    get grade(): number;
    get loc(): number;
    constructor(course: Course, point: TrackPoint, loop: number);
}
