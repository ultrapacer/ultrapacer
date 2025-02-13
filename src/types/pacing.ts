import { factors, Types } from '../main'

/**
 * Interface representing the tests for pacing.
 */
export interface PacingTests {
  /**
   * Indicates if the iterations test passed.
   */
  iterations: boolean

  /**
   * Indicates if the factor test passed.
   */
  factor: boolean

  /**
   * Indicates if the points test passed.
   */
  points: boolean

  /**
   * Indicates if the target test passed.
   */
  target: boolean

  /**
   * Indicates if all tests passed.
   */
  passing: boolean
}

/**
 * Interface representing a chunk of pacing data.
 */
export interface PaceChunk {
  /**
   * An array of constraints, which can be numbers or functions returning numbers.
   */
  constraints: (number | (() => number))[]

  /**
   * The delay associated with the chunk (seconds).
   */
  delay: number

  /**
   * The distance associated with the chunk (kilometer).
   */
  dist: number

  /**
   * The factor associated with the chunk.
   */
  factor: number

  /**
   * The factors associated with the chunk.
   */
  factors: factors.Factors

  /**
   * The normalized pace for the chunk (seconds/kilometer).
   */
  np: number

  /**
   * An array of plan points associated with the chunk.
   */
  points: Types.PlanPoint[]

  /**
   * The status of the chunk, which may include success, tests, and iterations.
   */
  status?: { success?: boolean; tests?: PacingTests; iterations?: number }

  /**
   * Calculates the pacing data for the chunk.
   */
  calculate(): void
}

/**
 * Interface representing the pacing data.
 */
export interface Pacing {
  /**
   * An array of pacing chunks.
   */
  chunks: Types.PaceChunk[]

  /**
   * The elapsed time (seconds).
   */
  elapsed: number

  isCurrent: boolean

  /**
   * The factor associated with the pacing.
   */
  factor: number

  /**
   * The factors associated with the pacing.
   */
  factors: factors.Factors

  /**
   * The moving time (seconds).
   */
  moving: number

  /**
   * The normalized pace (seconds/kilometer).
   */
  np: number

  /**
   * The pace value (seconds/kilometer).
   */
  pace: number

  /**
   * The status of the pacing, including completion, success, and number of chunks.
   */
  status: {
    /**
     * Number of chunks pacing was split into.
     */
    chunks: number

    /**
     * Indicates if the pacing is complete.
     */
    complete: boolean

    /**
     * An array of iteration totals for each chunk.
     */
    iterations: number[]

    /**
     * Indicates if the pacing was successful.
     */
    success: boolean
  }

  /**
   * Calculates the pacing data.
   */
  calculate(): void

  /**
   * Clears the cache of the pacing data.
   */
  clearCache(): void

  /**
   * Clears the factor of the pacing data.
   */
  clearFactor(): void
}
