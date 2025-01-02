export declare function round(num: number, digits?: number): number;
/**
 * linear interpolation between points
 * @param  x0 - first x value
 * @param  x1 - second x value
 * @param  y0 - first y value
 * @param  y1 - second y value
 * @param  x  - input x value
 * @returns  estimated y value
 */
export declare function interp(x0: number, x1: number, y0: number, y1: number, x: number): number;
/**
 * interpolate one array against another
 * @param xs  - reference array of x's
 * @param ys  - referece array of y's
 * @param x2s - input array of x values to interpolate
 * @returns array of estimated y values
 */
export declare function interpArray(xs: number[], ys: number[], x2s: number[]): number[];
export declare function linearRegression(xyr: number[][]): number[];
export declare function wlslr(x1s: number[], y1s: number[], x2s: number[], th: number): number[][];
export declare function rlt(a: number, b: number, r: number): boolean;
export declare function rgt(a: number, b: number, r: number): boolean;
export declare function rlte(a: number, b: number, r: number): boolean;
export declare function rgte(a: number, b: number, r: number): boolean;
export declare function req(a: number, b: number, r: number): boolean;
