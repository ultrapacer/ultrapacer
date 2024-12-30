import { latlon as LatLon } from 'sgeo';
/**
 * Latitude, Longitude, Altitude (LLA) object for creation of a point
 */
export type LLA = {
    /**
     * altitude in meters
     */
    alt: number;
    /**
     * latitude in degrees
     */
    lat: number;
    /**
     * longitude in degrees
     */
    lon: number;
};
export declare function isSourcePoint(arg: LLA | Point): arg is Point;
/**
 * Point object for use as a basis in a track or course
 */
export declare class Point {
    /**
     * altitude in meters
     */
    get alt(): number;
    /**
     * latitude in degrees
     */
    get lat(): number;
    /**
     * latitude and longitude object (see sgeo)
     */
    get latlon(): LatLon;
    /**
     * longitude in degrees
     */
    get lon(): number;
    /**
     * source (parent) point/data
     */
    source: {
        alt: number;
        lat: number;
        lon: number;
    } | Point;
    constructor(arg: Point | LLA);
}
/**
 * TrackPoint object for use in a track, with additional data (loc, grade)
 */
export declare class TrackPoint extends Point {
    private _trackData;
    get grade(): number;
    get loc(): number;
    constructor(arg: Point | LLA, loc: number, grade: number);
}
