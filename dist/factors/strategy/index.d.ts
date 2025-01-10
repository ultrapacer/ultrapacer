import { Course } from '../../models';
import { StrategyElement, StrategyElementType } from './StrategyElement';
/**
 * limited Plan type for Strategy
 */
type Plan = {
    course: Pick<Course, 'dist'>;
};
export declare class Strategy {
    plan: Plan;
    values: StrategyElement[];
    constructor(plan: Plan, values?: StrategyElement[]);
    /**
     * Returns strategy factor at location.
     *
     * @param loc - The location (in km) to determine value.
     * @returns  The strategy factor at input location.
     */
    at(loc: number): number;
    addValue(val: StrategyElement): void;
}
export type { StrategyElement, StrategyElementType };
