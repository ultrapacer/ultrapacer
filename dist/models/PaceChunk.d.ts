export class PaceChunk {
    constructor(data?: {});
    l: any;
    set elapsed(v: number);
    get elapsed(): number;
    get dist(): number;
    get pace(): number;
    get np(): number;
    get moving(): number;
    /**
     * apply pacing to chunk points, update factors
     */
    applyPacing(): void;
    factors: Factors | undefined;
    factor: number | undefined;
    /**
     * iterate applyPacing method until tests pass
     */
    calculate(): void;
    status: {
        tests: {
            iterations: boolean;
            factor: boolean;
            target: boolean;
        };
        success: boolean;
        iterations: number;
    } | undefined;
}
import { Factors } from '../factors/index.js';
