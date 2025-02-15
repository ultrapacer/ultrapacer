import { Types } from '../../main'
import { interp } from '../../util/math'

/**
 * get scale factor for time of day
 * @param sun - sun model
 * @param ssm - seconds since midnight
 * @returns scale factor
 */
export function scale(sun: Types.SunEventTimes, ssm: number) {
  // routine to address tod rollover at midnight
  function offset(ssm: number) {
    return ssm < sun.noon ? ssm + 86400 : ssm
  }

  // if its daylight, return 0
  if (ssm >= sun.sunrise && ssm <= sun.sunset) {
    return 0
  } else if (
    (!isNaN(sun.dawn) && !isNaN(sun.dusk) && (ssm <= sun.dawn || ssm >= sun.dusk)) ||
    sun.nadirAltitude > 0 // meaning sun never goes below horizon
  ) {
    return 1
  } else {
    // max dark scaling if never gets fully dark
    const maxDarkScaleFactor = sun.nadirAltitude < -6 ? 1 : -(sun.nadirAltitude / 6)

    // twilight, interpolate
    if (offset(ssm) >= offset(sun.nadir)) {
      // dawn
      return interp(
        offset(isNaN(sun.dawn) ? sun.nadir : sun.dawn),
        offset(sun.sunrise),
        maxDarkScaleFactor,
        0,
        offset(ssm)
      )
    } else {
      // dusk
      return interp(
        offset(sun.sunset),
        offset(isNaN(sun.dusk) ? sun.nadir : sun.dusk),
        0,
        maxDarkScaleFactor,
        offset(ssm)
      )
    }
  }
}
