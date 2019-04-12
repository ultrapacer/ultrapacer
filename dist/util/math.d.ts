export function round(num: any, digits?: number): number;
/**
 * linear interpolation between points
 * @param {*} x0 first x value
 * @param {*} x1 second x value
 * @param {*} y0 first y value
 * @param {*} y1 second y value
 * @param {*} x input x value
 * @returns {number} estimated y value
 */
export function interp(x0: any, x1: any, y0: any, y1: any, x: any): number;
/**
 * interpolate one array against another
 * @param {*} xs reference array of x's
 * @param {*} ys referece array of y's
 * @param {*} x2s input array of x values to interpolate
 * @returns {[number]} array of estimated y values
 */
export function interpArray(xs: any, ys: any, x2s: any): [number];
export function linearRegression(xyr: any): number[];
export function wlslr(x1s: any, y1s: any, x2s: any, th: any): any[];
export function rlt(a: any, b: any, r: any): boolean;
export function rgt(a: any, b: any, r: any): boolean;
export function rlte(a: any, b: any, r: any): boolean;
export function rgte(a: any, b: any, r: any): boolean;
export function req(a: any, b: any, r: any): boolean;
