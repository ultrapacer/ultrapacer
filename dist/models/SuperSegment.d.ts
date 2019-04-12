export class SuperSegment extends Segment {
    constructor(segments?: any[]);
    segments: any[];
    /**
     * Returns first segment in segments array.
     *
     * @return {Segment} The first segment in the segments array.
     */
    get first(): Segment;
    /**
     * Returns last segment in segments array.
     *
     * @return {Segment} The last segment in the segments array.
     */
    get last(): Segment;
    /**
     * Return sum of a field
     * @param {String}  field   Field to sum
     * @return {Number}         The sum
     */
    sum(field: string): number;
    get start(): any;
    get end(): any;
    get len(): number;
    get gain(): number;
    get loss(): number;
    set grade(v: any);
    get grade(): any;
    get name(): any;
    get time(): number;
    get elapsed(): any;
    get actualElapsed(): any;
    get actualTime(): number;
    get tod(): any;
    get waypoint(): any;
    /**
     * Returns factors for this SuperSegment.
     *
     * @return {Object} The pacing factors for this segment, including overall "combined" factor.
     */
    get factors(): Object;
    get status(): any;
    /**
     * Returns first point in the SuperSegment.
     *
     * @return {CoursePoint|PlanPoint} The first point in the SuperSegment.
     */
    get point1(): CoursePoint | PlanPoint;
    /**
     * Returns last point in the SuperSegment.
     *
     * @return {CoursePoint|PlanPoint} The last point in the SuperSegment.
     */
    get point2(): CoursePoint | PlanPoint;
}
import { Segment } from './Segment.js';
