import { Types } from '../../main';
/**
 * get scale factor for time of day
 * @param sun - sun model
 * @param ssm - seconds since midnight
 * @returns scale factor
 */
export declare function scale(sun: Types.SunEventTimes, ssm: number): number;
