import { Factors } from '../factors';
import { CoursePoint } from './CoursePoint';
import { PaceChunk } from './PaceChunk';
import { Plan } from './Plan';
export declare class PlanPoint {
    factors: Factors;
    constructor(plan: Plan, point: CoursePoint);
    _chunk?: PaceChunk;
    _plan: Plan;
    _point: CoursePoint;
    elapsed: number;
    time: number;
    tod: number;
    delay: number;
    get lat(): number;
    get lon(): number;
    get alt(): number;
    get latlon(): import("sgeo").latlon;
    get grade(): number;
    get loc(): number;
    /**
     * np for a point is the same as its parent chunk
     */
    get np(): number;
    get factor(): number;
    get pace(): number;
}
