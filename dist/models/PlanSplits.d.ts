import { Plan } from './Plan';
import { PlanSegment } from './Segment';
import { Waypoint } from './Waypoint';
export declare class PlanSplits {
    private _segments?;
    private _miles?;
    private _kilometers?;
    plan: Plan;
    constructor(plan: Plan);
    get segments(): (PlanSegment & {
        waypoint: Waypoint;
    })[];
    set segments(v: (PlanSegment & {
        waypoint: Waypoint;
    })[]);
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
