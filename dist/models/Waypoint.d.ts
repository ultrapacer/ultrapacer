import { CourseSegment, PlanSegment } from './Segment';
import { Site } from './Site';
export declare class Waypoint {
    constructor(site: Site, loop?: number);
    _data: object;
    loop: number;
    site: Site;
    get course(): import("./Course").Course;
    get name(): string | undefined;
    get description(): string | undefined;
    get loc(): number;
    set loc(v: number);
    get lat(): number;
    get lon(): number;
    get alt(): number;
    /**
     * @deprecated - this has been replaced with course terrain model
     */
    get tier(): number;
    get type(): import("./Site").WaypointType;
    get hasTypicalDelay(): boolean;
    get cutoff(): number | undefined;
    matchingSegment(segments: CourseSegment[]): CourseSegment | PlanSegment | undefined;
}
