import { Course } from '../../models/Course';
import { CoursePoint } from '../../models/CoursePoint';
import { PlanPoint } from '../../models/PlanPoint';
/**
 * Return a scaling factor for terrain
 *
 * @param point  - Point object per /models/Point
 * @param course - Course object per /models/Course
 *
 * @returns The terrain factor at the provided point
 */
export declare function getTerrainFactor(point: CoursePoint | PlanPoint, course: Course): number;
