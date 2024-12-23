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
/**
 * Represents the data structure for a plan.
 */
export type PlanData = {
    cutoffMargin?: number | undefined;
    delays?: DelaysInput | undefined;
    heatModel?: {
        baseline: number;
        max: number;
    } | undefined;
    /**
     * Unique identifier for the plan
     */
    id?: string | null | number | symbol | undefined;
    /**
     * Method for calculating target time
     */
    method: PlanMethod;
    name?: string | undefined;
    /**
     * Scales for factors
     */
    scales?: {
        altitude?: number;
        dark?: number;
    } | undefined;
    /**
     * Start date and timezone
     */
    start?: DateWithTimezone | undefined;
    strategy?: StrategyValues | undefined;
    target: number;
    typicalDelay?: number | undefined;
};
type PlanUpdateData = Partial<PlanData> & NonNullable<Partial<Pick<PlanData, 'method' | 'target'>>>;
export declare class Plan {
    private _data;
    readonly course: Course;
    get cutoffMargin(): number | undefined;
    /**
     * cutoffs array is calculated on get as a combination of the course cutoffs and the plan points
     * gets re-calculated if the course or plan version changes
     */
    get cutoffs(): PlanCutoff[];
    private _cutoffs?;
    private _cutoffsVersion?;
    /**
     * delay is sum of Plan.delays
     */
    get delay(): number;
    /**
     * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
     * gets re-calculated if the course or plan version changes
     */
    get delays(): PlanDelay[];
    private _delays?;
    private _delaysVersion?;
    /**
     * Event object
     * gets re-calculated if the course or plan version changes
     */
    get event(): Event;
    private _event?;
    private _eventVersion?;
    get events(): {
        sun: {
            event: string;
            elapsed: number;
            loc: number;
        }[];
    };
    private _events?;
    private _eventsVersion?;
    get heatModel(): {
        start: number;
        stop: number;
        baseline: number;
        max: number;
    } | undefined;
    private _heatModel?;
    private _heatModelVersion?;
    /**
     * Unique identifier for the plan
     */
    get id(): string | number | symbol | null | undefined;
    /**
     * Method for calculating target time
     */
    get method(): PlanMethod;
    /**
     * Display name for the plan
     */
    get name(): string | undefined;
    pacing: Pacing;
    readonly points: PlanPoint[];
    /**
     * Scales for factors
     */
    get scales(): {
        altitude: number;
        dark: number;
    };
    private _scales?;
    private _scalesVersion?;
    /**
     * splits
     */
    readonly splits: PlanSplits;
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
    private _statsVersion?;
    get strategy(): Strategy;
    private _strategy?;
    private _strategyVersion?;
    /**
     * Target time in seconds
     */
    get target(): number;
    /**
     * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
     */
    get typicalDelay(): number;
    /**
     * Version of plan update (non trivial changes that affect pacing)
     */
    _version: number;
    /**
     * Version of course & plan update (non trivial changes that affect pacing)
     */
    get version(): number;
    constructor(course: Course, data: PlanData);
    checkPacing(): boolean;
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
    update(data: PlanUpdateData): void;
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
