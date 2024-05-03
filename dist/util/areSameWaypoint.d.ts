type S = {
    _id: string;
} | string;
type W = {
    site: S;
    loop: number;
};
export declare function areSameWaypoint(a: W, b: W): boolean;
export {};
