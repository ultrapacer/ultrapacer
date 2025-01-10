import { Factors } from '../factors/Factors';
import { Types } from '../main';
import { TrackPoint } from './Point';
/**
 * CoursePoint object for use in a course, including scaling and loop data
 */
export declare class CoursePoint extends TrackPoint {
    private _course;
    /**
     * pacing factors at this point
     */
    factors: Factors;
    /**
     * grade, scaled, as a percentage
     */
    get grade(): number;
    /**
     * flag for interpolated points (not part of original course)
     */
    get interpolated(): boolean;
    set interpolated(value: boolean);
    private _interpolated?;
    /**
     * location, scaled, with loop, in kilometers
     */
    get loc(): number;
    /**
     * loop number (zero-indexed)
     */
    loop: number;
    /**
     * source (parent) point
     */
    readonly source: TrackPoint | CoursePoint;
    constructor(course: Types.Course, point: TrackPoint, loop: number);
}
