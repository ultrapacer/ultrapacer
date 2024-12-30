import { latlon as LatLon } from 'sgeo';
type LLA = [number, number, number];
export declare class Point {
    _data: {
        alt: number;
        lat: number;
        lon: number;
    } | Point;
    get alt(): number;
    get lat(): number;
    get latlon(): LatLon;
    get lon(): number;
    constructor(arg: Point | LLA);
}
export declare class TrackPoint extends Point {
    private _trackData;
    get grade(): number;
    get loc(): number;
    constructor(arg: Point | LLA, loc: number, grade: number);
}
export {};
