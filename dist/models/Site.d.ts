import { Course } from './Course';
import { Waypoint } from './Waypoint';
type WaypointCutoff = {
    loop: number;
    time: number;
};
export declare class Site {
    private _waypoints?;
    private _lat?;
    private _lon?;
    private _alt?;
    constructor(course: Course, data: {
        _id: string;
        type: string;
        name: string;
        description?: string;
        cutoffs?: WaypointCutoff[];
        percent: number;
        tier?: number;
        terrainFactor?: number;
        terrainType?: string;
        crew?: boolean;
        dropbags?: boolean;
    });
    _data: {
        percent: number;
    };
    _id: string;
    course: Course;
    cutoffs: WaypointCutoff[];
    name: string;
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
    get lat(): number | undefined;
    get lon(): number | undefined;
    get alt(): number | undefined;
    refreshLLA(): void;
    serialize(): Partial<this>;
}
export {};
