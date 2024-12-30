import { Factors } from '../factors';
import { CoursePoint } from './CoursePoint';
import { PaceChunk } from './PaceChunk';
import { Plan } from './Plan';
export declare class PlanPoint {
    _chunk?: PaceChunk;
    _plan: Plan;
    private _point;
    get alt(): number;
    delay: number;
    /**
     * elapsed time in seconds
     */
    elapsed: number;
    get factor(): number;
    factors: Factors;
    get grade(): number;
    /** {@inheritDoc CoursePoint} */
    get lat(): number;
    get latlon(): import("sgeo").latlon;
    get loc(): number;
    get lon(): number;
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
