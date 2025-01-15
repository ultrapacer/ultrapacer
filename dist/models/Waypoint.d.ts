import { Types } from '../main';
import { Site } from './Site';
export declare class Waypoint implements Types.Waypoint {
    constructor(site: Site, loop?: number);
    _data: object;
    loop: number;
    site: Site;
    get course(): Types.Course;
    get name(): string | undefined;
    get description(): string | undefined;
    get loc(): number;
    set loc(v: number);
    get lat(): number;
    get lon(): number;
    get alt(): number;
    get type(): Types.SiteType;
    get hasTypicalDelay(): boolean;
    get cutoff(): number | undefined;
}
