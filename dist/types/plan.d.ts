import { Types } from '../main';
import { DateWithTimezone } from '.';
export type PlanDataDelays = {
    delay: number;
    loop: number;
    siteId: string | symbol;
}[];
export type PlanDataMethod = 'np' | 'pace' | 'time';
/**
 * Represents the data structure for a plan.
 */
export type PlanData = {
    cutoffMargin?: number | undefined;
    delays?: PlanDataDelays | undefined;
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
    method: PlanDataMethod;
    /**
     * Optional display name for the plan
     */
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
    start: DateWithTimezone;
    strategy?: Types.StrategyElement[] | undefined;
    target: number;
    typicalDelay?: number | undefined;
};
/**
 * Represents the data structure for updating a plan.
 * All fields are optional, but method and target cannot be set to null or undefined.
 */
export type PlanUpdateData = Partial<PlanData> & NonNullable<Partial<Pick<PlanData, 'method' | 'target'>>>;
export type PlanEvents = {
    sun: {
        event: string;
        elapsed: number;
        loc: number;
    }[];
};
type PlanStats = {
    readonly factors: {
        [key: string]: {
            min: number;
            max: number;
        };
    };
    readonly sun: {
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
export type PlanHeatModel = {
    start: number;
    stop: number;
    baseline: number;
    max: number;
} | undefined;
type PlanScales = {
    altitude: number;
    dark: number;
} | undefined;
export interface PlanDelay {
    delay: number;
    loc: number;
    waypoint: Types.Waypoint;
}
export interface PlanCutoff {
    waypoint: Types.Waypoint;
    loc: number;
    time: number;
}
export interface Plan {
    readonly course: Types.Course;
    readonly cutoffMargin?: number | undefined;
    /**
     * cutoffs array is calculated on get as a combination of the course cutoffs and the plan points
     * gets re-calculated if the course or plan version changes
     */
    readonly cutoffs?: PlanCutoff[];
    /**
     * delay is sum of Plan.delays
     */
    readonly delay: number;
    /**
     * delays array is calculated on get as a combination of the specified delays and default delays based on waypoint types
     * gets re-calculated if the course or plan version changes
     */
    readonly delays: PlanDelay[];
    /**
     * Event object
     * gets re-calculated if the course or plan version changes
     */
    readonly event: Types.Event;
    readonly events: PlanEvents;
    readonly heatModel: {
        start: number;
        stop: number;
        baseline: number;
        max: number;
    } | undefined;
    /**
     * Unique identifier for the plan
     */
    readonly id?: string | null | number | symbol | undefined;
    /**
     * Method for calculating target time
     */
    readonly method: PlanDataMethod;
    /**
     * Display name for the plan
     */
    readonly name?: string | undefined;
    readonly pacing: Types.Pacing;
    readonly points: Types.PlanPoint[];
    /**
     * Scales for factors
     */
    readonly scales: PlanScales;
    /**
     * splits
     */
    readonly splits: Types.PlanSplits;
    /**
     * Plan stats object
     */
    readonly stats: PlanStats;
    readonly strategy: Types.Strategy;
    /**
     * Target time in seconds
     */
    readonly target: number;
    /**
     * Typical delay for the plan; amount of dwell time at 'aid' and 'water' waypoints
     */
    readonly typicalDelay: number;
    /**
     * version of plan update (non-trivial changes that affect pacing)
     */
    readonly version: number;
    checkPacing(): void;
    /**
     * get delay at input Waypoint
     * @param waypoint - waypoint of interest
     * @returns delay (sec)
     */
    getDelayAtWaypoint(waypoint: Types.Waypoint): number;
    /**
     * Finds and optionally inserts a point at an input location.
     *
     * @param loc - The location (in km) to determine value.
     * @param insert - Whether to also insert a created point into the points array. Defaults to false.
     * @returns The PlanPoint at input location.
     */
    getPoint(loc: number, insert?: boolean): Types.PlanPoint;
    /**
     * Update the plan with new data.
     * @param data - Plan update data
     */
    update(data: Types.PlanUpdateData): void;
}
export {};
