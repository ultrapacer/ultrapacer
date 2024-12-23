import { CoursePoint } from './CoursePoint';
import { CourseSplits } from './CourseSplits';
import { Site, type SiteData } from './Site';
import { Track } from './Track';
import { Waypoint } from './Waypoint';
import { DateWithTimezone } from './types';
import { Event } from './Event';
export type TerrainTypeIndex = 'paved' | 'dirt road' | 'doubletrack' | 'singletrack' | 'technical';
export declare const terrainTypes: {
    type: TerrainTypeIndex;
    value: number;
}[];
export type CourseData = {
    /**
     * Number of loops
     */
    loops?: number | undefined;
    /**
     * Specified (override) distance of course (in km)
     */
    dist?: number | undefined;
    /**
     * Specified (override) gain of course (in meters)
     */
    gain?: number | undefined;
    /**
     * Specified (override) loss of course (in meters)
     */
    loss?: number | undefined;
    /**
     * List of sites along course to create waypoints
     */
    sites?: SiteData[] | undefined;
    /**
     * Start date and timezone
     */
    start?: DateWithTimezone | undefined;
    /**
     * Terrain data
     */
    terrain?: {
        percent: number;
        value: number | TerrainTypeIndex | {
            value: number;
            type: string;
        };
    }[] | undefined;
};
export type CourseUpdateData = Partial<CourseData>;
export declare class Course {
    _data: CourseData;
    /**
     * Course cutoffs
     */
    get cutoffs(): CourseCutoff[];
    private _cutoffs?;
    private _cutoffsVersion?;
    /**
     * Total distance of course (in km)
     */
    get dist(): number;
    private _dist?;
    private _distVersion?;
    /**
     * Distance scale of course (in km), relative to calculated track distance
     */
    get distScale(): number;
    /**
     * Event object
     */
    get event(): Event | undefined;
    private _event?;
    private _eventVersion?;
    /**
     * Total gain of course (in meters)
     */
    get gain(): number;
    private _gain?;
    private _gainVersion?;
    /**
     * Gain scale of course (in meters), relative to calculated track gain
     */
    get gainScale(): number;
    /**
     * Distance of each loop (in km)
     */
    get loopDist(): number;
    /**
     * Gain of each loop (in meters)
     */
    get loopGain(): number;
    /**
     * Loss of each loop (in meters)
     */
    get loopLoss(): number;
    /**
     * Number of loops for the track
     */
    get loops(): number;
    /**
     * Total loss of course (in meters)
     */
    get loss(): number;
    private _loss?;
    private _lossVersion?;
    /**
     * Loss scale of course (in meters), relative to calculated track loss
     */
    get lossScale(): number;
    /**
     * Course name
     */
    name?: string;
    private _sites;
    get sites(): Site[];
    set sites(data: Site[]);
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    version: number;
    constructor(track: Track, data: CourseData);
    update(data: CourseUpdateData): void;
    /**
     * @deprecated
     */
    clearCache(level?: number): void;
    private _waypoints?;
    get waypoints(): Waypoint[];
    private _track;
    set track(v: Track);
    get track(): Track;
    private _points?;
    get points(): CoursePoint[];
    set points(v: CoursePoint[]);
    /**
     * Finds and optionally inserts a point at an input location.
     *
     * @param loc - The location (in km) to determine value.
     * @param insert - Whether to also insert a created point into the points array. Defaults to false.
     * @returns The CoursePoint at input location.
     */
    getPoint(loc: number, insert?: boolean): CoursePoint;
    get terrain(): TerrainElement[];
    set terrain(value: CourseData['terrain']);
    private _terrain?;
    private _splits?;
    get splits(): CourseSplits;
    private _stats?;
    get stats(): {
        altitude: {
            avg: number;
            max: number;
            min: number;
        };
        grade: {
            avg: number;
            max: number;
            min: number;
        };
        terrain: {
            avg: number;
            max: number;
            min: number;
            maxDist: number;
            minDist: number;
        };
    };
    locationsToBreaks(locations: number[]): {
        start: number;
        end: number;
    }[];
}
export declare class CourseCutoff {
    waypoint: Waypoint;
    constructor(waypoint: Waypoint);
    get loc(): number;
    get time(): number;
}
interface TerrainElement {
    /**
     * Terrain value, not factor (eg, this is a number, eg 5, not a factor like 1.05)
     */
    value: number;
    /**
     * Terrain type, if applicable
     */
    type?: string | undefined;
    /**
     * Percent range of terrain
     */
    percents: [number, number];
}
export {};
