export declare class Factors {
    private _data;
    private _combined?;
    constructor(value?: {
        altitude?: number;
        grade?: number;
        terrain?: number;
        heat?: number;
        dark?: number;
        fatigue?: number;
        strategy?: number;
    });
    init(val: number): this;
    get altitude(): number;
    set altitude(v: number);
    get grade(): number;
    set grade(v: number);
    get terrain(): number;
    set terrain(v: number);
    get heat(): number;
    set heat(v: number);
    get dark(): number;
    set dark(v: number);
    get fatigue(): number;
    set fatigue(v: number);
    get strategy(): number;
    set strategy(v: number);
    get combined(): number;
    /**
     * @param f - function to apply
     * @param factors - factor list to apply
     */
    applyEach(f: (val: number, factor2: number) => number, factors: Factors): void;
    /**
     * scale each factor
     * @param scale - scale to apply
     */
    scaleEach(scale: number): this;
}
export type FactorKeys = 'altitude' | 'grade' | 'terrain' | 'heat' | 'dark' | 'fatigue' | 'strategy';
export declare const factorKeys: FactorKeys[];
