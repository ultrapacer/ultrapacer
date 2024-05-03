import { Plan } from './Plan';
import { PlanSegment } from './Segment';
export declare class PlanSplits {
    private _segments?;
    private _miles?;
    private _kilometers?;
    plan: Plan;
    constructor(plan: Plan);
    get segments(): PlanSegment[];
    set segments(v: PlanSegment[]);
    get miles(): PlanSegment[];
    set miles(v: PlanSegment[]);
    get kilometers(): PlanSegment[];
    set kilometers(v: PlanSegment[]);
    createSegments(): PlanSegment[];
    createSplits(unit: string): PlanSegment[];
    calcSegments(breaks: {
        start: number;
        end: number;
    }[]): PlanSegment[];
}
