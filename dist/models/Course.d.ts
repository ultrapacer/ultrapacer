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
    loops?: number;
    dist?: number | null;
    gain?: number | null;
    loss?: number | null;
    sites?: SiteData[];
    /**
     * Start date and timezone
     */
    start?: DateWithTimezone;
    terrain?: {
        percent: number;
        value: number | TerrainTypeIndex | {
            value: number;
            type: string;
        };
    }[];
};
export declare class Course {
    event?: Event;
    name?: string;
    _cache: {
        splits?: [];
        stats?: object;
    };
    constructor(track: Track, data: CourseData);
    private _loops;
    get loops(): number;
    set loops(v: number);
    /**
     * Total distance of course (in km)
     */
    get dist(): number;
    set dist(v: number);
    private _dist?;
    private _distOverride?;
    /**
     * Distance scale of course (in km), relative to calculated track distance
     */
    get distScale(): number;
    /**
     * Total gain of course (in meters)
     */
    get gain(): number;
    set gain(v: number);
    private _gain?;
    private _gainOverride?;
    /**
     * Gain scale of course (in meters), relative to calculated track gain
     */
    get gainScale(): number;
    /**
     * Total loss of course (in meters)
     */
    get loss(): number;
    set loss(v: number);
    private _loss?;
    private _lossOverride?;
    /**
     * Loss scale of course (in meters), relative to calculated track loss
     */
    get lossScale(): number;
    get loopDist(): number;
    get loopGain(): number;
    get loopLoss(): number;
    private _sites;
    get sites(): Site[];
    set sites(data: Site[]);
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    version: number;
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
    private _cutoffs?;
    get cutoffs(): CourseCutoff[];
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
