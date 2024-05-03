import { Course } from './Course';
import { CourseSegment } from './Segment';
export declare class CourseSplits {
    private _segments?;
    private _miles?;
    private _kilometers?;
    course: Course;
    constructor(course: Course);
    get segments(): CourseSegment[];
    set segments(v: CourseSegment[]);
    get miles(): CourseSegment[];
    set miles(v: CourseSegment[]);
    get kilometers(): CourseSegment[];
    set kilometers(v: CourseSegment[]);
    createSegments(): CourseSegment[];
    createSplits(unit: string): CourseSegment[];
    calcSegments(breaks: {
        start: number;
        end: number;
    }[]): CourseSegment[];
}
