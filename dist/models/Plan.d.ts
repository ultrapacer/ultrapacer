import { Strategy, StrategyValues } from '../factors/strategy';
import { Callbacks } from '../util/Callbacks';
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
declare class PlanScales {
    plan: Plan;
    private _altitude;
    get altitude(): number;
    set altitude(value: number);
    private _dark;
    get dark(): number;
    set dark(value: number);
    constructor(plan: Plan);
}
export type PlanData = {
    cutoffMargin?: number;
    /**
     * Unique identifier for the plan
     */
    id?: string | null | number | symbol;
    delays?: DelaysInput;
    heatModel?: {
        baseline: number;
        max: number;
    };
    method: string;
    name?: string;
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
    event: Event;
    /**
     * Unique identifier for the plan
     */
    id?: string | null | number | symbol;
    method: string;
    name?: string;
    readonly points: PlanPoint[];
    scales: PlanScales;
    target: number;
    constructor(course: Course, data: PlanData);
    callbacks: Callbacks;
    pacing: Pacing;
    clearCache(): void;
    private _cutoffs?;
    get cutoffs(): PlanCutoff[];
    set start(val: {
        date: Date;
        timezone: string;
    });
    private _strategy;
    get strategy(): Strategy;
    set strategy(values: StrategyValues);
    private _typicalDelay;
    get typicalDelay(): number;
    set typicalDelay(value: number);
    private _cutoffMargin?;
    get cutoffMargin(): number | undefined;
    set cutoffMargin(value: number | undefined);
    private _heatModel?;
    set heatModel(value: {
        baseline: number;
        max: number;
    });
    get heatModel(): {
        start: number;
        stop: number;
        baseline: number;
        max: number;
    } | undefined;
    private _specifiedDelays;
    private _delays?;
    /**
     * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
     */
    set delays(value: DelaysInput);
    get delays(): PlanDelay[];
    /**
     * delay is sum of Plan.delays
     */
    get delay(): number;
    private _splits?;
    /**
     * splits are calculaed on get
     */
    get splits(): PlanSplits;
    private _events?;
    get events(): {
        sun: {
            event: string;
            elapsed: number;
            loc: number;
        }[];
    };
    private _stats?;
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
    checkPacing(): boolean;
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
