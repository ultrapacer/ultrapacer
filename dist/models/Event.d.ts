export class Event {
    constructor(obj: any);
    set start(val: any);
    get start(): any;
    get startTime(): any;
    get hasTOD(): boolean;
    get sun(): any;
    dateAtElapsed(seconds: any): Date;
    elapsedToTimeOfDay(elapsed: any): number;
    serialize(): any;
}
