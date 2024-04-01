export function calcSegments({ plan, course, breaks }: {
    plan: any;
    course: any;
    breaks: any;
}): Segment[];
export function createSegments(data: any): Segment[];
export function createSplits(data: any): Segment[];
import { Segment } from './models/Segment.js';
