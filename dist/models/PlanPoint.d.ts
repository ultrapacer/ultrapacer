import { Factors } from '../factors';
import { CoursePoint } from './CoursePoint';
import { PaceChunk } from './PaceChunk';
import { Plan } from './Plan';
export declare class PlanPoint extends CoursePoint {
    _chunk?: PaceChunk;
    _plan: Plan;
    _source: CoursePoint;
    delay: number;
    /**
     * elapsed time in seconds
     */
    elapsed: number;
    get factor(): number;
    factors: Factors;
    /**
     * np for a point is the same as its parent chunk
     */
    get np(): number;
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
