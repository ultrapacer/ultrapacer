import { Factors } from '../factors';
import { Plan } from '.';
import { Course } from './Course';
import { CoursePoint } from './CoursePoint';
import { PlanPoint } from './PlanPoint';
import { Waypoint } from './Waypoint';
declare class Segment {
    constructor(obj: {
        point1: CoursePoint | PlanPoint;
        point2: CoursePoint | PlanPoint;
        gain: number;
        loss: number;
        grade: number;
        name?: string;
    });
    point1: CoursePoint | PlanPoint;
    point2: CoursePoint | PlanPoint;
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
    waypoint?: Waypoint;
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
    point1: CoursePoint;
    point2: CoursePoint;
    constructor(course: Course, obj: {
        point1: CoursePoint;
        point2: CoursePoint;
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
