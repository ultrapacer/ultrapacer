export * from './models'
export { interpolatePoint } from './models/Points/interpolate'

export * as factors from './factors'
export { Factors, Strategy } from './factors'
export { adjust as adjustStrategy } from './factors/strategy/adjust'
export { scale as scaleDark } from './factors/dark/scale'
export * as math from './util/math'

export * as util from './util'
/*
// DEPRECATED:
export { addLocations } from './models/Points/addLocations'
export { calcSegments } from './geo'
*/
