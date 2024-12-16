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
    get tier(): number;
    get type(): import("./Site").WaypointType;
    get terrainFactor(): number | undefined;
    get terrainType(): string | undefined;
    get hasTypicalDelay(): boolean;
    get cutoff(): number | null;
    set cutoff(v: number | null);
    matchingSegment(segments: CourseSegment[]): CourseSegment | PlanSegment | undefined;
}
