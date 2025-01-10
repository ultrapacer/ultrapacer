import { Types } from '../main';
import { SiteData } from '../types';
import { Course } from './Course';
import { Waypoint } from './Waypoint';
export declare class Site implements Types.Site {
    /**
     * internal cache object
     * gets deleted and regenerated when version changes
     */
    private _cache;
    get cache(): {
        _version?: number;
        alt?: number;
        lat?: number;
        lon?: number;
        waypoints?: Waypoint[];
    };
    /**
     * internal data object
     */
    private _data;
    get alt(): number;
    readonly course: Course;
    get cutoffs(): {
        loop: number;
        time: number;
    }[];
    get description(): string | undefined;
    get id(): string | symbol | undefined;
    get lat(): number;
    get lon(): number;
    get name(): string | undefined;
    get percent(): number;
    set percent(v: number);
    get tier(): number;
    get type(): Types.SiteType;
    get version(): number;
    get waypoints(): Waypoint[];
    constructor(course: Course, data: SiteData);
    refreshLLA(): void;
}
