/**
 * Return a scaling factor for terrain
 *
 * @param {Object}  args          Arguments object
 * @param {Point}   args.point    Point object per /models/Point
 * @param {Course}  args.course   Course object per /models/Course
 *
 * @return {Number} The terrain factor at the provided point
 */
export function getTerrainFactor({ point, course }: {
    point: Point;
    course: Course;
}): number;
