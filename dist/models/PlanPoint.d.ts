export class PlanPoint {
    constructor(plan: any, point: any);
    get __class(): string;
    /**
     * np for a point is the same as its parent chunk
     */
    get np(): any;
    get factor(): any;
    get pace(): number | undefined;
}
