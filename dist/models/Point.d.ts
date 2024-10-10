import { latlon as LatLon } from 'sgeo';
export declare class Point {
    constructor(lat: number, lon: number, alt: number);
    alt: number;
    lat: number;
    lon: number;
    get latlon(): LatLon;
}
export declare class TrackPoint extends Point {
    loc: number;
    grade: number;
    constructor(lat: number, lon: number, alt: number, loc: number, grade: number);
}
