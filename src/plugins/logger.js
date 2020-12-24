// src/plugins/logger.js
function leftZero (val) {
  if (val < 10) {
    return `0${val}`
  } else {
    return val
  }
}
function timeStr (t) {
  return leftZero(t.getHours()) + ':' +
          leftZero(t.getMinutes()) + ':' +
          leftZero(t.getSeconds()) + '.' +
          leftZero(Math.round(t.getMilliseconds() / 10))
}
const isBeta = window.location.origin.includes('appspot.com')
export function logger (message = null, prev = null) {
  if (process.env.NODE_ENV === 'development' || isBeta) {
    const t = new Date()
    if (message) {
      if (prev) {
        const delt = (t - prev) / 1000
        console.log(`[${timeStr(t)}] ${message} (${delt} sec)`)
      } else {
        console.log(`[${timeStr(t)}] ${message}`)
      }
    }
    return t
  }
}

export default {
  install (Vue) {
    Vue.prototype.$logger = logger
  }
}
