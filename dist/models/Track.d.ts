export class Track {
    constructor(arg: any);
    type: any;
    get __class(): string;
    clearCache(): void;
    set points(v: any);
    get points(): any;
    set start(v: any);
    get start(): any;
    set finish(v: any);
    get finish(): any;
    set stats(v: any);
    get stats(): any;
    set dist(v: any);
    get dist(): any;
    set gain(v: any);
    get gain(): any;
    set loss(v: any);
    get loss(): any;
    getLLA(location: any, opts?: {}): {
        lat: any;
        lon: any;
        alt: any;
        grade: any;
        ind: any;
    } | {
        lat: any;
        lon: any;
        alt: any;
        grade: any;
        ind: any;
    }[];
    getNearestPoint(latlon: any, start: any, limit: any): {
        point: any;
        delta: number;
    };
    /**
     * Returns nearest location to input lat/lon pair.
     *
     * @param {Number[]}  ll        [lat, lon] array.
     * @param {Number}    [start]   starting location in meters.
     * @param {Number}    [limit]   max distance it can move.
     * @return {Number}             The nearest location to input lat/lon pair.
     */
    getNearestLoc(ll: number[], start?: number, limit?: number): number;
    reduceDensity({ spacing, length }?: {}): Track;
}
