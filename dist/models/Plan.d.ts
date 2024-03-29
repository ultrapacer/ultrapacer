export class Plan {
    constructor(data: any);
    get __class(): string;
    clearCache(): void;
    _cache: {} | undefined;
    set eventStart(v: any);
    get eventStart(): any;
    set eventTimezone(v: any);
    get eventTimezone(): any;
    get event(): any;
    set adjustForCutoffs(v: any);
    get adjustForCutoffs(): any;
    get cutoffs(): any;
    set strategy(v: any);
    get strategy(): any;
    set heatModel(v: any);
    get heatModel(): any;
    get totalDelay(): any;
    set delays(v: any);
    get delays(): any;
    get delay(): any;
    set notes(v: any);
    get notes(): any;
    get splits(): any;
    getDelayAtWaypoint(waypoint: any): any;
    getTypicalDelayAtWaypoint(waypoint: any): any;
    getNoteAtWaypoint(waypoint: any): any;
    /**
     * Finds and optionally inserts a point at an input location.
     *
     * @param {Number} args.loc - The location (in km) to determine value.
     * @param {Boolean} args.insert - Whether to also insert a created point into the points array. Defaults to false.
     * @return {PlanPoint} The PlanPoint at input location.
     */
    getPoint({ loc, insert }: number): PlanPoint;
    get points(): any;
    get events(): any;
    get stats(): any;
    /**
     * update Plan with key/value pairs
     * @param {*} params
     */
    update(params: any): void;
    invalidatePacing(): void;
    checkPacing(): boolean;
}
import { PlanPoint } from './PlanPoint.js';
