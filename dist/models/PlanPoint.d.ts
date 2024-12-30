import { Factors } from '../factors';
import { CoursePoint } from './CoursePoint';
import { PaceChunk } from './PaceChunk';
import { Plan } from './Plan';
export declare class PlanPoint extends CoursePoint {
    _chunk?: PaceChunk;
    _plan: Plan;
    _source: CoursePoint;
    /**
     * delay in seconds at this point (not cumulative)
     */
    delay: number;
    /**
     * elapsed time in seconds
     */
    elapsed: number;
    /**
     * combined pacing factor at this point
     */
    get factor(): number;
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
     * moving time in seconds
     */
    time: number;
    /**
     * time of day in seconds
     */
    tod: number;
    constructor(plan: Plan, point: CoursePoint);
}
