import { latlon as LatLon } from 'sgeo';
import { Types } from '../main';
export declare class Track implements Types.Track {
    dist: number;
    gain: number;
    loss: number;
    points: Types.TrackPoint[];
    constructor(llas: Types.TrackData);
    get start(): Pick<Types.TrackPoint, "alt" | "lat" | "lon">;
    get finish(): Pick<Types.TrackPoint, "alt" | "lat" | "lon">;
    getLLA(location: number): {
        lat: number;
        lon: number;
        alt: number;
    };
    getNearestPoint(latlon: LatLon, start: Types.Point, limit: number): {
        point: Types.TrackPoint;
        delta: number;
    };
    reduceDensity(spacing?: number, length?: number): Track;
}
export declare function createTrackFromArrays(lat: number[], lon: number[], alt: number[]): Track;
