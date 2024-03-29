export class Waypoint {
    constructor(data: any);
    get __class(): string;
    set site(v: any);
    get site(): any;
    get course(): any;
    get name(): any;
    get description(): any;
    set loc(v: number);
    get loc(): number;
    set lat(v: any);
    get lat(): any;
    set lon(v: any);
    get lon(): any;
    set alt(v: any);
    get alt(): any;
    get tier(): any;
    get type(): any;
    set dropbags(v: any);
    get dropbags(): any;
    set crew(v: any);
    get crew(): any;
    get terrainFactor(): any;
    get terrainType(): any;
    len(segments: any): any;
    gain(segments: any): any;
    loss(segments: any): any;
    time(segments: any): any;
    pace(segments: any): any;
    elapsed(segments: any): any;
    get hasTypicalDelay(): boolean;
    delay(typicalDelay: any, waypointDelays: any): any;
    set cutoff(v: any);
    get cutoff(): any;
    matchingSegment(segments: any): any;
    refreshLLA(): void;
    serialize(): any;
}
