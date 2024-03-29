export { Course, Plan, Point, Segment, Site, SuperSegment, Track, Waypoint } from './models'
export { Factors, Strategy, getHeatFactor, list as factorList } from './factors'
export { adjust as adjustStrategy } from './factors/strategy/adjust'
export { scale as scaleDark } from './factors/dark/scale'
export * as math from './util/math'
export { calcSegments } from './geo'

// DEPRECATED:
export { addLocations } from './models/Points/addLocations'
export { interpolatePoint } from './models/Points/interpolate'
export { dateToTODSeconds } from './util'
