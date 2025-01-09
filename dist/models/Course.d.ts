import { CoursePoint } from './CoursePoint';
import { CourseSplits } from './CourseSplits';
import { Event } from './Event';
import { Site, type SiteData } from './Site';
import { Track } from './Track';
import { DateWithTimezone } from './types';
import { Waypoint } from './Waypoint';
export type TerrainTypeIndex = 'paved' | 'dirt road' | 'doubletrack' | 'singletrack' | 'technical';
export declare const terrainTypes: {
    type: TerrainTypeIndex;
    value: number;
}[];
/**
 * Course data
 */
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
            type?: string;
        };
    }[] | undefined;
};
/**
 * Course update data
 */
export type CourseUpdateData = Partial<CourseData>;
/**
 * Course class
 */
export declare class Course {
    private _cache;
    get cache(): {
        cutoffs?: CourseCutoff[];
        dist?: number;
        event?: Event;
        gain?: number;
        loss?: number;
        points?: CoursePoint[];
        sites?: Site[];
        splits?: CourseSplits;
        stats?: CourseStats;
        terrain?: TerrainElement[];
        waypoints?: Waypoint[];
        version?: number;
    };
    /**
     * Course data
     */
    private _data;
    /**
     * Course cutoffs
     */
    get cutoffs(): CourseCutoff[];
    /**
     * Total distance of course (in km)
     */
    get dist(): number;
    /**
     * Distance scale of course (in km), relative to calculated track distance
     */
    get distScale(): number;
    /**
     * Event object
     */
    get event(): Event | undefined;
    /**
     * Total gain of course (in meters)
     */
    get gain(): number;
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
    /**
     * Loss scale of course (in meters), relative to calculated track loss
     */
    get lossScale(): number;
    /**
     * Course points
     */
    get points(): CoursePoint[];
    /**
     * Course sites
     */
    get sites(): Site[];
    /**
     * Course splits
     */
    get splits(): CourseSplits;
    /**
     * Course stats
     */
    get stats(): CourseStats;
    /**
     * Terrain data
     */
    get terrain(): TerrainElement[];
    /**
     * Track object
     */
    readonly track: Track;
    /**
     * Version of course update (non-trivial changes that affect pacing)
     */
    version: number;
    /**
     * Course waypoints
     */
    get waypoints(): Waypoint[];
    constructor(track: Track, data: CourseData);
    update(data: CourseUpdateData): void;
    /**
     * Finds or creates a point at an input location.
     *
     * @param loc - The location (in km) to determine value.
     * @returns The CoursePoint at input location.
     */
    getPoint(loc: number): CoursePoint;
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
export interface CourseStats {
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
