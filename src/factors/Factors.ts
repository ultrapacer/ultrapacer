export class Factors {
  private _data = {
    altitude: 1,
    grade: 1,
    terrain: 1,
    heat: 1,
    dark: 1,
    fatigue: 1,
    strategy: 1
  }

  private _combined?: number

  constructor(value?: {
    altitude?: number
    grade?: number
    terrain?: number
    heat?: number
    dark?: number
    fatigue?: number
    strategy?: number
  }) {
    Object.assign(this, value)
  }

  init(val: number) {
    factorKeys.forEach((key) => (this._data[key] = val))
    return this
  }

  get altitude() {
    return this._data.altitude
  }
  set altitude(v) {
    this._data.altitude = v
    delete this._combined
  }
  get grade() {
    return this._data.grade
  }
  set grade(v) {
    this._data.grade = v
    delete this._combined
  }
  get terrain() {
    return this._data.terrain
  }
  set terrain(v) {
    this._data.terrain = v
    delete this._combined
  }
  get heat() {
    return this._data.heat
  }
  set heat(v) {
    this._data.heat = v
    delete this._combined
  }
  get dark() {
    return this._data.dark
  }
  set dark(v) {
    this._data.dark = v
    delete this._combined
  }
  get fatigue() {
    return this._data.fatigue
  }
  set fatigue(v) {
    this._data.fatigue = v
    delete this._combined
  }
  get strategy() {
    return this._data.strategy
  }
  set strategy(v) {
    this._data.strategy = v
    delete this._combined
  }

  get combined() {
    if (this._combined === undefined) {
      this._combined = factorKeys.reduce((acc, key) => acc * this._data[key], 1)
    }
    return this._combined
  }

  /**
   * @param f - function to apply
   * @param factors - factor list to apply
   */
  applyEach(f: (val: number, factor2: number) => number, factors: Factors) {
    factorKeys.forEach((key) => (this._data[key] = f(this._data[key], factors[key])))
  }

  /**
   * scale each factor
   * @param scale - scale to apply
   */
  scaleEach(scale: number) {
    factorKeys.forEach((key) => (this._data[key] *= scale))

    delete this._combined

    return this
  }
}

export type FactorKeys = 'altitude' | 'grade' | 'terrain' | 'heat' | 'dark' | 'fatigue' | 'strategy'

export const factorKeys: FactorKeys[] = [
  'altitude',
  'grade',
  'terrain',
  'heat',
  'dark',
  'fatigue',
  'strategy'
]
