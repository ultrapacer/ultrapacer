import { Strategy, StrategyValues } from '../factors/strategy';
import { Course, CourseCutoff } from './Course';
import { Event } from './Event';
import { Pacing } from './Pacing';
import { PlanPoint } from './PlanPoint';
import { PlanSplits } from './PlanSplits';
import { Waypoint } from './Waypoint';
import { DateWithTimezone } from './types';
type DelaysInput = {
    waypoint: {
        site: string;
        loop: number;
    };
    delay: number;
}[];
type PlanMethod = 'np' | 'pace' | 'time';
export type PlanData = {
    cutoffMargin?: number;
    delays?: DelaysInput;
    heatModel?: {
        baseline: number;
        max: number;
    };
    /**
     * Unique identifier for the plan
     */
    id?: string | null | number | symbol;
    /**
     * Method for calculating target time
     */
    method: PlanMethod;
    name?: string;
    /**
     * Scales for factors
     */
    scales?: {
        altitude?: number;
        dark?: number;
    };
    /**
     * Start date and timezone
     */
    start?: DateWithTimezone;
    strategy?: StrategyValues;
    target: number;
    typicalDelay?: number;
};
export declare class Plan {
    readonly course: Course;
    get cutoffMargin(): number | undefined;
    set cutoffMargin(value: number | undefined);
    private _cutoffMargin?;
    get cutoffs(): PlanCutoff[];
    private _cutoffs?;
    /**
     * delay is sum of Plan.delays
     */
    get delay(): number;
    /**
     * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
     */
    get delays(): PlanDelay[];
    set delays(value: DelaysInput);
    private _specifiedDelays;
    private _delays?;
    event: Event;
    get events(): {
        sun: {
            event: string;
            elapsed: number;
            loc: number;
        }[];
    };
    private _events?;
    get heatModel(): {
        start: number;
        stop: number;
        baseline: number;
        max: number;
    } | undefined;
    set heatModel(value: {
        baseline: number;
        max: number;
    } | undefined);
    private _heatModel?;
    /**
     * Unique identifier for the plan
     */
    id?: string | null | number | symbol;
    /**
     * Method for calculating target time
     */
    get method(): PlanMethod;
    set method(value: PlanMethod);
    private _method;
    /**
     * Display name for the plan
     */
    name?: string;
    pacing: Pacing;
    readonly points: PlanPoint[];
    /**
     * Scales for factors
     */
    get scales(): {
        altitude?: number;
        dark?: number;
    } | undefined;
    set scales(values: {
        altitude?: number;
        dark?: number;
    } | undefined);
    private _scales;
    /**
     * splits are calculaed on get
     */
    get splits(): PlanSplits;
    private _splits?;
    set start(val: {
        date: Date;
        timezone: string;
    });
    /**
     * Plan stats object
     */
    get stats(): {
        factors: {
            [key: string]: {
                min: number;
                max: number;
            };
        };
        sun: {
            day: {
                time: number;
                dist: number;
            };
            twilight: {
                time: number;
                dist: number;
            };
            dark: {
                time: number;
                dist: number;
            };
        };
    };
    private _stats?;
    get strategy(): Strategy;
    set strategy(values: StrategyValues);
    private _strategy;
    /**
     * Target time in seconds
     */
    get target(): number;
    set target(value: number);
    private _target;
    /**
     * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
     */
    get typicalDelay(): number;
    set typicalDelay(value: number);
    private _typicalDelay;
    constructor(course: Course, data: PlanData);
    checkPacing(): boolean;
    clearCache(): void;
    /**
     * get delay at input Waypoint
     * @param waypoint - waypoint of interest
     * @returns delay (sec)
     */
    getDelayAtWaypoint(waypoint: Waypoint): number;
    /**
     * get typical delay at input Waypoint
     * @param waypoint - waypoint of interest
     * @returns delay (sec)
     */
    getTypicalDelayAtWaypoint(waypoint: Waypoint): number;
    /**
     * Finds and optionally inserts a point at an input location.
     *
     * @param loc - The location (in km) to determine value.
     * @param insert - Whether to also insert a created point into the points array. Defaults to false.
     * @returns The PlanPoint at input location.
     */
    getPoint(loc: number, insert?: boolean): PlanPoint;
    invalidatePacing(): void;
}
declare class PlanDelay {
    delay: number;
    waypoint: Waypoint;
    constructor(waypoint: Waypoint, delay: number);
    get loc(): number;
}
declare class PlanCutoff {
    plan: Plan;
    courseCutoff: CourseCutoff;
    point: PlanPoint;
    constructor(plan: Plan, courseCutoff: CourseCutoff, point: PlanPoint);
    get waypoint(): Waypoint;
    get loc(): number;
    get time(): number;
}
export {};
