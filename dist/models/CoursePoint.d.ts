/// <reference types="~/@types/sgeo" />
import { Factors } from '../factors/Factors';
import { Course } from './Course';
import { TrackPoint } from './Point';
export declare class CoursePoint {
    factors: Factors;
    constructor(course: Course, point: TrackPoint, loop: number);
    point: TrackPoint;
    course: Course;
    loop: number;
    get lat(): number;
    get lon(): number;
    get alt(): number;
    get latlon(): import("sgeo").latlon;
    get grade(): number;
    get loc(): number;
}
