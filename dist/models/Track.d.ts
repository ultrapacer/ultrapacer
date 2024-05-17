/// <reference types="~/@types/sgeo" />
import { latlon as LatLon } from 'sgeo';
import { Point, TrackPoint } from './Point';
export type TrackData = {
    lat: number;
    lon: number;
    alt: number;
}[];
export declare class Track {
    dist: number;
    gain: number;
    loss: number;
    points: TrackPoint[];
    constructor(llas: TrackData);
    get start(): {
        lat: number;
        lon: number;
    };
    get finish(): {
        lat: number;
        lon: number;
    };
    getLLA(location: number): {
        lat: number;
        lon: number;
        alt: number;
    };
    /**
     * iterate to new location based on waypoint lat/lon
     * @param latlon - new point location
     * @param start - starting point in track
     * @param limit - max distance along track from starting point
     * @returns
     */
    getNearestPoint(latlon: LatLon, start: Point, limit: number): {
        point: TrackPoint;
        delta: number;
    };
    reduceDensity(spacing?: number, length?: number): Track;
}
/**
 * utilty function to create a new track from lat[],lon[],alt[] input
 * @param lat - latitudes
 * @param lon - longitudes
 * @param alt - altitudes
 * @returns new Track
 */
export declare function createTrackFromArrays(lat: number[], lon: number[], alt: number[]): Track;
