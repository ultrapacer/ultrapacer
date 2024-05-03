import { PlanPoint } from '../../models/PlanPoint';
import { HeatModel } from './HeatModel';
/**
 * Return a scaling factor for heat
 *
 * @param point - Point object per /models/Point
 * @param model - Heat model
 * @returns  The heat factor at the provided point
 */
export declare function getHeatFactor(point: PlanPoint, model?: HeatModel): number;