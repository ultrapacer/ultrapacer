export * from './models'
export { interpolatePoint } from './models/Points/interpolate'

export * as factors from './factors'
export { Factors, Strategy } from './factors'
export { adjust as adjustStrategy } from './factors/strategy/adjust'
export { scale as scaleDark } from './factors/dark/scale'
export * as math from './util/math'
/*
// DEPRECATED:
export {  getHeatFactor} from './factors'
export { addLocations } from './models/Points/addLocations'
export { dateToTODSeconds } from './util'
export { calcSegments } from './geo'
*/
