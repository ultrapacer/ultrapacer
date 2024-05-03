import { CourseSegment, PlanSegment } from './Segment';
declare class SuperSegment {
    segments: CourseSegment[] | PlanSegment[];
    constructor(segments: CourseSegment[] | PlanSegment[]);
    /**
     * Returns first segment in segments array.
     * @returns The first segment in the segments array.
     */
    get first(): CourseSegment | PlanSegment;
    /**
     * Returns last segment in segments array.
     * @returns The last segment in the segments array.
     */
    get last(): CourseSegment | PlanSegment;
    get start(): number;
    get end(): number;
    get len(): number;
    get gain(): number;
    get loss(): number;
    get grade(): number;
    get name(): string | undefined;
    get waypoint(): import("./Waypoint").Waypoint | undefined;
    /**
     * Returns factors for this SuperSegment.
     * @returns The pacing factors for this segment, including overall "combined" factor.
     */
    get factors(): import("../factors/Factors").Factors;
    /**
     * Returns first point in the SuperSegment.
     * @returns The first point in the SuperSegment.
     */
    get point1(): import("./CoursePoint").CoursePoint | import("./PlanPoint").PlanPoint;
    /**
     * Returns last point in the SuperSegment.
     * @returns The last point in the SuperSegment.
     */
    get point2(): import("./CoursePoint").CoursePoint | import("./PlanPoint").PlanPoint;
}
export declare class SuperCourseSegment extends SuperSegment {
    segments: CourseSegment[];
    constructor(segments: CourseSegment[]);
}
export declare class SuperPlanSegment extends SuperSegment {
    segments: PlanSegment[];
    constructor(segments: PlanSegment[]);
    get last(): PlanSegment;
    get elapsed(): number;
    get time(): number;
    get tod(): number;
}
export {};
