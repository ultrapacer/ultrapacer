import { Course } from './Course';
import { Waypoint } from './Waypoint';
type WaypointCutoff = {
    loop: number;
    time: number;
};
export type SiteData = {
    id: string | symbol;
    type: string;
    name?: string;
    description?: string;
    cutoffs?: WaypointCutoff[];
    percent: number;
    tier?: number;
    terrainFactor?: number;
    terrainType?: string;
    crew?: boolean;
    dropbags?: boolean;
};
export declare class Site {
    private _waypoints?;
    private _lat;
    private _lon;
    private _alt;
    constructor(course: Course, data: SiteData);
    _data: {
        percent: number;
    };
    course: Course;
    cutoffs: WaypointCutoff[];
    id: string | symbol;
    name?: string;
    tier: number;
    type: string;
    terrainFactor?: number;
    terrainType?: string;
    description?: string;
    pointsIndex?: number;
    dropbags: boolean;
    crew: boolean;
    clearCache(): void;
    get percent(): number;
    set percent(v: number);
    get waypoints(): Waypoint[];
    get lat(): number;
    get lon(): number;
    get alt(): number;
    refreshLLA(): void;
    serialize(): Partial<this>;
}
export {};
