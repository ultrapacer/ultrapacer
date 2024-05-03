import { Factors } from '../factors';
import { Plan } from './Plan';
import { PlanPoint } from './PlanPoint';
declare class Tests {
    iterations: boolean;
    factor: boolean;
    target: boolean;
    get passing(): boolean;
    get statusString(): string;
}
export declare class PaceChunk {
    constraints: (number | (() => number))[];
    constructor(plan: Plan, points: PlanPoint[], constraints: (number | (() => number))[], delay: number);
    points: PlanPoint[];
    plan: Plan;
    delay: number;
    factor: number;
    factors: Factors;
    status?: {
        success?: boolean;
        tests?: Tests;
        iterations?: number;
    };
    get elapsed(): number;
    get dist(): number;
    get pace(): number;
    get np(): number;
    get moving(): number;
    /**
     * apply pacing to chunk points, update factors
     */
    applyPacing(): void;
    /**
     * iterate applyPacing method until tests pass
     */
    calculate(): void;
}
export {};
