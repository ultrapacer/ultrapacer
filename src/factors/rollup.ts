import { sumBy } from 'lodash'

import { Factors } from './Factors'

export function rollup(input: { factors: Factors; dist: number }[]) {
  const f = new Factors().init(0)
  input.forEach(({ factors, dist }) => {
    f.applyEach((v, b) => v + dist * b, factors)
  })
  f.scaleEach(1 / sumBy(input, 'dist'))
  return f
}
