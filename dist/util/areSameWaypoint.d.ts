type S = {
    id: string | symbol;
} | string | symbol;
type W = {
    site: S;
    loop: number;
};
export declare function areSameWaypoint(a: W, b: W): boolean;
export {};
