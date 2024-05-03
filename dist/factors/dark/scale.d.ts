import { Sun } from '../../models/Sun';
/**
 * get scale factor for time of day
 * @param sun - sun model
 * @param ssm - seconds since midnight
 * @returns scale factor
 */
export declare function scale(sun: Sun, ssm: number): number;
