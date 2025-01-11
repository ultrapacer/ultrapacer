import { Factors } from '../factors';
import { Types } from '../main';
import { Plan } from '.';
import { PlanPoint } from './PlanPoint';
declare class Segment {
    constructor(obj: {
        point1: Types.CoursePoint | Types.PlanPoint;
        point2: Types.CoursePoint | Types.PlanPoint;
        gain: number;
        loss: number;
        grade: number;
        name?: string;
    });
    point1: Types.CoursePoint | Types.PlanPoint;
    point2: Types.CoursePoint | Types.PlanPoint;
    /**
     * elevation gain (m) over segment
     */
    gain: number;
    /**
     * elevation loss (m) over segment
     */
    loss: number;
    /**
     * average grade (%) over segment
     */
    grade: number;
    /**
     * waypoint at end of segment
     */
    waypoint?: Types.Waypoint;
    private _name?;
    /**
     * name of segment
     */
    get name(): string | undefined;
    /**
     * location along course (km) at start of segment
     */
    get start(): number;
    /**
     * distance (km) of segment
     */
    get dist(): number;
    /**
     * location along course (km) at end of segment
     */
    get end(): number;
    /**
     * altitude (m) at end of segment
     */
    get alt(): number;
}
export declare class CourseSegment extends Segment {
    private _course;
    point1: Types.CoursePoint;
    point2: Types.CoursePoint;
    constructor(course: Types.Course, obj: {
        point1: Types.CoursePoint;
        point2: Types.CoursePoint;
        gain: number;
        loss: number;
        grade: number;
    });
}
export declare class PlanSegment extends Segment {
    private _plan;
    point1: PlanPoint;
    point2: PlanPoint;
    constructor(plan: Plan, obj: {
        point1: PlanPoint;
        point2: PlanPoint;
        gain: number;
        loss: number;
        grade: number;
    });
    /**
     * moving pace (s/km) over segment
     */
    get pace(): number;
    /**
     * delay (s) over segment
     */
    get delay(): number | undefined;
    /**
     * elapsed time (s) over segment
     */
    get elapsed(): number;
    /**
     * moving time (s) over segment
     */
    get time(): number | undefined;
    /**
     * time of day (s) at end of segment
     */
    get tod(): number;
    set delay(v: number | undefined);
    set pace(v: number);
    set elapsed(v: number);
    set time(v: number | undefined);
    set tod(v: number);
    private _factors?;
    get factors(): Factors;
}
export {};
