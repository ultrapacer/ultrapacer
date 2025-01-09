import { Course } from './Course';
import { Waypoint } from './Waypoint';
type WaypointCutoff = {
    loop: number;
    time: number;
};
export type WaypointType = 'start' | 'finish' | 'aid' | 'water' | 'landmark' | 'junction' | 'other';
/**
 * Site data object
 */
export type SiteData = {
    /**
     * optional cutoffs for the site
     */
    cutoffs?: WaypointCutoff[];
    /**
     * optional description for the site
     */
    description?: string;
    /**
     * optional id for the site
     * required when inputting plan delays
     */
    id?: string | symbol;
    /**
     * optional name for the site
     */
    name?: string | undefined;
    /**
     * percent of total distance along the track where the site is located
     */
    percent: number;
    /**
     * type of site
     */
    type: WaypointType;
};
export declare class Site {
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
    /**
     * altitude of the site
     */
    get alt(): number;
    /**
     * course the site is associated with
     */
    readonly course: Course;
    /**
     * optional cutoffs for the site
     */
    get cutoffs(): WaypointCutoff[];
    /**
     * optional description for the site
     */
    get description(): string | undefined;
    /**
     * optional id for the site
     */
    get id(): string | symbol | undefined;
    /**
     * latitude of the site
     */
    get lat(): number;
    /**
     * longitude of the site
     */
    get lon(): number;
    /**
     * optional name for the site
     */
    get name(): string | undefined;
    /**
     * percent of total distance along the track where the site is located
     */
    get percent(): number;
    set percent(v: number);
    /**
     * type of site
     */
    get type(): WaypointType;
    /**
     * Version of course (not currently able to update site directly)
     */
    get version(): number;
    /**
     * array of waypoints for the site
     */
    get waypoints(): Waypoint[];
    constructor(course: Course, data: SiteData);
    /**
     * refresh the latitude, longitude, and altitude of the site
     */
    refreshLLA(): void;
}
export {};
