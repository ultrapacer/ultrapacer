import { Sun } from './Sun';
export declare class Event {
    readonly start: Date;
    readonly lat: number;
    readonly lon: number;
    readonly timezone: string;
    readonly sun: Sun;
    readonly startTime: number;
    constructor(start: Date, timezone: string, lat: number, lon: number);
    dateAtElapsed(seconds: number): Date;
    elapsedToTimeOfDay(elapsed: number): number;
    serialize(): Pick<this, "start" | "sun" | "lat" | "lon" | "timezone">;
}
