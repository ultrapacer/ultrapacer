import { expect, test } from 'vitest'

import { Sun } from '~/models/Sun'

import { getDarkFactor } from '../'

const sunrise = 21600
const sunset = 72000

const sun: Sun = {
  nadir: 0,
  nadirAltitude: -20,
  noon: sunrise + (sunset - sunrise) / 2,
  sunrise,
  sunset,
  dawn: sunrise - 3600,
  dusk: sunset + 3600
}

const model = {
  baseline: 0.025,
  terrainScale: 0.75
}

test('Check dark factor halfway through dawn', () => {
  const fDark = getDarkFactor(21600 - 1800, 1.5, sun, model)
  expect(fDark).toBe(1.2)
})
