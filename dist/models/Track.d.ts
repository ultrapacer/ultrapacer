import { latlon as LatLon } from 'sgeo';
import { Models, Types } from '../main';
export declare class Track implements Types.Track {
    dist: number;
    gain: number;
    loss: number;
    points: Types.TrackPoint[];
    constructor(llas: Types.TrackData);
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
    getNearestPoint(latlon: LatLon, start: Types.Point, limit: number): {
        point: Models.TrackPoint;
        delta: number;
    };
    reduceDensity(spacing?: number, length?: number): Models.Track;
}
export declare function createTrackFromArrays(lat: number[], lon: number[], alt: number[]): Models.Track;
