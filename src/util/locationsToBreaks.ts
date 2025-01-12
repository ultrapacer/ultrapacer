import { rlt } from './math'

export function locationsToBreaks(locations: number[], dist: number) {
  const tmp = locations.filter((b) => b > 0 && rlt(b, dist, 4))
  tmp.unshift(0)

  // map to {start, end} format
  const breaks = tmp.map((b, i) => ({ start: b, end: tmp[i + 1] || dist }))
  return breaks
}
