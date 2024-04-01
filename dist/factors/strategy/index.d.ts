export class Strategy {
    constructor(arg?: {});
    length: any;
    values: any;
    /**
     * Returns strategy factor at location.
     *
     * @param {Number} loc - The location (in km) to determine value.
     * @return {Number} The strategy factor at input location.
     */
    at(loc: number): number;
    addValue(val: any): void;
}
