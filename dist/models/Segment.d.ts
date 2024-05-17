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
    gain: number;
    loss: number;
    grade: number;
    waypoint?: Waypoint;
    private _name?;
    get name(): string | undefined;
    get start(): number;
    get len(): number;
    get dist(): number;
    get end(): number;
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
    get pace(): number | undefined;
    get delay(): number | undefined;
    get elapsed(): number;
    get time(): number | undefined;
    get tod(): number;
    set delay(v: number | undefined);
    set pace(v: number | undefined);
    set elapsed(v: number);
    set time(v: number | undefined);
    set tod(v: number);
    private _factors?;
    get factors(): Factors;
}
export {};
