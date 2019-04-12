/**
 * Return a scaling factor for heat
 *
 * @param {Object}  args          An object.
 * @param {Point}   args.point    Point object per /models/Point
 * @param {Object}  args.model    Heat model in the following format:
 *                                  {
 *                                    start:    tod, seconds
 *                                    stop:     tod, seconds
 *                                    max:      peak % increase in percent
 *                                    baseline: background factor
 *                                  }
 *
 * @return {Number} The heat factor at the provided point
 */
export function getHeatFactor({ point, model }?: {
    point: Point;
    model: Object;
}): number;
