export class Course {
    constructor(data: any);
    get __class(): string;
    set loops(v: any);
    get loops(): any;
    set dist(v: any);
    get dist(): any;
    set gain(v: any);
    get gain(): any;
    set loss(v: any);
    get loss(): any;
    get distScale(): number;
    get gainScale(): number;
    get lossScale(): number;
    get loopDist(): number;
    get loopGain(): number;
    get loopLoss(): number;
    set sites(data: any);
    get sites(): any;
    clearCache(level?: number): void;
    get waypoints(): any;
    set track(v: any);
    get track(): any;
    set points(v: any);
    get points(): any;
    /**
     * Finds and optionally inserts a point at an input location.
     *
     * @param {Number} args.loc - The location (in km) to determine value.
     * @param {Boolean} args.insert - Whether to also insert a created point into the points array. Defaults to false.
     * @return {CoursePoint} The CoursePoint at input location.
     */
    getPoint({ loc, insert }: number): CoursePoint;
    refreshWaypointLLAs(): void;
    get terrainFactors(): any;
    get terrainTypes(): any;
    get cutoffs(): any;
    get splits(): any;
    set stats(v: any);
    get stats(): any;
    set eventStart(v: any);
    get eventStart(): any;
    set eventTimezone(v: any);
    get eventTimezone(): any;
    get event(): any;
}
import { CoursePoint } from './CoursePoint.js';
