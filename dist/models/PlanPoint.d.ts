import { Factors } from '../factors';
import { Types } from '../main';
import { CoursePoint } from './CoursePoint';
import { PaceChunk } from './PaceChunk';
/**
 * PlanPoint object for use in a plan, including pacing and time data
 */
export declare class PlanPoint extends CoursePoint {
    private _plan;
    _chunk?: PaceChunk;
    /**
     * delay in seconds at this point (not cumulative)
     */
    delay: number;
    /**
     * elapsed time in seconds
     * does not include delay from this point
     */
    elapsed: number;
    /**
     * combined pacing factor at this point
     */
    get factor(): number;
    /**
     * pacing factors at this point
     */
    factors: Factors;
    /**
     * normalized pace at this point (from last point) in seconds per kilometer
     */
    get np(): number;
    /**
     * pace at this point (from last point) in seconds per kilometer
     */
    get pace(): number;
    /**
     * source (parent) course point
     */
    source: Types.CoursePoint;
    /**
     * moving time in seconds
     */
    time: number;
    /**
     * time of day in seconds
     */
    tod: number;
    constructor(plan: Types.Plan, point: Types.CoursePoint);
}
