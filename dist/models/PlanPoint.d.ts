import { Factors } from '../factors';
import { Types } from '../main';
import { CoursePoint } from './CoursePoint';
/**
 * PlanPoint object for use in a plan, including pacing and time data
 */
export declare class PlanPoint extends CoursePoint implements Types.PlanPoint {
    private _plan;
    _chunk?: Types.PaceChunk;
    delay: number;
    elapsed: number;
    get factor(): number;
    factors: Factors;
    get np(): number;
    get pace(): number;
    source: Types.CoursePoint;
    time: number;
    tod: number;
    constructor(plan: Types.Plan, point: Types.CoursePoint);
}
