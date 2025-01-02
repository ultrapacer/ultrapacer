import { Course } from '~/models';
import { StrategyElement } from './StrategyElement';
export type StrategyValues = {
    onset: number;
    value: number;
    type: string;
}[];
/**
 * limited Plan type for Strategy
 */
type Plan = {
    course: Pick<Course, 'dist'>;
};
export declare class Strategy {
    plan: Plan;
    values: StrategyValues;
    constructor(plan: Plan, values?: StrategyValues);
    /**
     * Returns strategy factor at location.
     *
     * @param loc - The location (in km) to determine value.
     * @returns  The strategy factor at input location.
     */
    at(loc: number): number;
    addValue(val: StrategyElement): void;
}
export {};
