import { Factors } from '../factors';
import { Callbacks } from '../util/Callbacks';
import { PlanPoint } from '.';
import { PaceChunk } from './PaceChunk';
import { Plan } from './Plan';
export declare class Pacing {
    callbacks: Callbacks;
    chunks: PaceChunk[];
    plan: Plan;
    constructor(plan: Plan);
    clearCache(): void;
    invalidate(): void;
    private _elapsed?;
    get elapsed(): number;
    get pace(): number;
    private _factor?;
    get factor(): number;
    clearFactor(): void;
    private _factors?;
    get factors(): Factors;
    get np(): number;
    get moving(): number;
    get status(): {
        complete: boolean;
        success: boolean;
        chunks: number;
    };
    calculate(): void;
    /**
     * initialize pacing chunks array
     */
    initChunks(): void;
    /**
     * calculate pacing for each pacing chunk
     */
    calcChunks(): void;
    /**
     * make sure chunks nps increasing monotincally and merge if needed
     */
    validateChunks(): void;
    /**
     * split pacing chunk; mutates chunks array
     * @param chunk - PaceChunk to split
     * @param point - point to split at
     * @param elapsed - elapsed time at split
     */
    splitChunk(chunk: PaceChunk, point: PlanPoint, elapsed: number): void;
    /**
     * merge two sequential chunks together, mutates chunks array
     * @param a - first chunk
     * @param b - second chunk
     */
    mergeChunks(a: PaceChunk, b: PaceChunk): void;
}
