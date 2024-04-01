/**
 * Return time-of-day based dark factor
 *
 * @param {Object}  args                  An object
 * @param {Number}  args.timeOfDaySeconds Time of day (in seconds)
 * @param {Number}  args.terrainFactor    Terrain %
 * @param {Object}  args.sun              Sun model, object w/ dawn, sunrise, sunset, dusk in time-of-day seconds
 * @param {Object}  [args.model]          Darkness model (see ./defaults)
 *
 * @return {Number} The heat factor at the provided point
 */
export function getDarkFactor({ timeOfDaySeconds, terrainFactor, sun, model }: {
    timeOfDaySeconds: number;
    terrainFactor: number;
    sun: Object;
    model?: Object | undefined;
}): number;
