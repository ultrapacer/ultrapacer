/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Checks if the provided value is of type number.
 *
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is a number.
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value)
}
