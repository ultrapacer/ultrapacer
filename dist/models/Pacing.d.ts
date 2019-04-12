export class Pacing {
    constructor(data?: {});
    callbacks: Callbacks;
    get __class(): string;
    clearCache(): void;
    invalidate(): void;
    chunks: any[] | PaceChunk[] | undefined;
    get elapsed(): any;
    get pace(): number;
    get factor(): any;
    get factors(): any;
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
     * @param {*} args
     * @param {PlanPoint} args.point    point to split at
     * @param {Number}    args.elapsed  elapsed time at split
     */
    splitChunk(chunk: any, { point, elapsed }: PlanPoint): void;
    /**
     * merge two sequential chunks together, mutates chunks array
     * @param {*} a first chunk
     * @param {*} b second chunk
     */
    mergeChunks(a: any, b: any): void;
}
import { Callbacks } from '../util/Callbacks.js';
import { PaceChunk } from './PaceChunk.js';
