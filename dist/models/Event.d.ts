import { Types } from '../main';
export declare class Event implements Types.Event {
    readonly start: Date;
    readonly lat: number;
    readonly lon: number;
    readonly timezone: string;
    readonly sun: Types.SunEvent;
    readonly startTime: number;
    constructor(start: Date, timezone: string, lat: number, lon: number);
    dateAtElapsed(seconds: number): Date;
    elapsedToTimeOfDay(elapsed: number): number;
}
