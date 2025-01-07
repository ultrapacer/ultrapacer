import { Plan } from './Plan';
import { PlanSegment } from './Segment';
import { Waypoint } from './Waypoint';
export declare class PlanSplits {
    plan: Plan;
    constructor(plan: Plan);
    get segments(): (PlanSegment & {
        waypoint: Waypoint;
    })[];
    set segments(v: (PlanSegment & {
        waypoint: Waypoint;
    })[]);
    private _segments?;
    private _segmentsVersion?;
    get miles(): PlanSegment[];
    set miles(v: PlanSegment[]);
    private _miles?;
    private _milesVersion?;
    get kilometers(): PlanSegment[];
    set kilometers(v: PlanSegment[]);
    private _kilometers?;
    private _kilometersVersion?;
    createSegments(): PlanSegment[];
    createSplits(unit: string): PlanSegment[];
    calcSegments(breaks: {
        start: number;
        end: number;
    }[]): PlanSegment[];
}
