export type StrategyElementType = 'linear' | 'step';
export type StrategyElement = {
    onset: number;
    type: StrategyElementType;
    value: number;
};
