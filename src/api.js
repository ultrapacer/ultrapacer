import Vue from 'vue'
import axios from 'axios'
const logger = require('winston').child({ file: 'api.js' })

const client = axios.create({
  json: true
})

export default {
  async executeAuth (method, resource, data) {
    const log = logger.child({ method: 'executeAuth' })
    log.info(`${resource} initiated`)
    const accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      log.info(`${resource} completed`)
      return req.data
    })
  },
  async execute (method, resource, data) {
    const log = logger.child({ method: 'execute' })
    log.info(`${resource} initiated`)
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      log.info(`${resource} completed`)
      return req.data
    })
  },
  getUser () {
    return this.executeAuth('get', '/api/user')
  },
  getUserStats () {
    return this.executeAuth('get', '/api/user/stats')
  },
  updateUser (id, data) {
    return this.executeAuth('put', `/api/user/${id}`, data)
  },
  modifyUserCourses (id, action, course) {
    return this.executeAuth('put', `/api/user/${id}/course/${action}/${course}`)
  },
  getCourses () {
    return this.executeAuth('get', '/api/courses')
  },
  getRaces () {
    return this.execute('get', '/api-public/races')
  },
  async getCourse (id, key = 'course') {
    const sub = (key === 'course') ? '' : key + '/'
    if (Vue.prototype.$auth.isAuthenticated()) {
      return this.executeAuth('get', `/api/course/${sub}${id}`)
    } else {
      return this.execute('get', `/api-public/course/${sub}${id}`)
    }
  },
  async getCourseField (id, field, tryAuth = true) {
    if (tryAuth && Vue.prototype.$auth.isAuthenticated()) {
      return this.executeAuth('get', `/api/course/${id}/field/${field}`)
    } else {
      return this.execute('get', `/api-public/course/${id}/field/${field}`)
    }
  },
  createCourse (data) {
    return this.executeAuth('post', '/api/courses', data)
  },
  updateCourse (id, data) {
    return this.executeAuth('put', `/api/courses/${id}`, data)
  },
  deleteCourse (id) {
    return this.executeAuth('delete', `/api/courses/${id}`)
  },
  copyCourse (id) {
    return this.executeAuth('put', `/api/course/${id}/copy`)
  },
  modifyCourseUsers (id, action, user) {
    return this.executeAuth('put', `/api/course/${id}/user/${action}/${user}`)
  },
  getWaypoints (courseID) {
    return this.executeAuth('get', `/api/course/${courseID}/waypoints`)
  },
  createWaypoint (data) {
    return this.executeAuth('post', '/api/waypoint', data)
  },
  updateWaypoint (id, data) {
    return this.executeAuth('put', `/api/waypoint/${id}`, data)
  },
  deleteWaypoint (id) {
    return this.executeAuth('delete', `/api/waypoint/${id}`)
  },
  async getPlan (id) {
    if (Vue.prototype.$auth.isAuthenticated()) {
      return this.executeAuth('get', `/api/plan/${id}`)
    } else {
      return this.execute('get', `/api-public/plan/${id}`)
    }
  },
  getPlans (courseID) {
    return this.executeAuth('get', `/api/course/${courseID}/plans`)
  },
  createPlan (data) {
    return this.executeAuth('post', '/api/plan', data)
  },
  updatePlan (id, data) {
    return this.executeAuth('put', `/api/plan/${id}`, data)
  },
  deletePlan (id) {
    return this.executeAuth('delete', `/api/plan/${id}`)
  },
  isPublic (type, id) {
    return this.execute('get', `/api-public/ispublic/${type}/${id}`)
  },
  courseUserCount (id) {
    return this.execute('get', `/api-public/course/${id}/countusers`)
  },
  getTimeZone (lat, lon) {
    return this.executeAuth('get', `/api/timezone?lat=${lat}&lon=${lon}`)
  },
  getElevation (coordinates, source) {
    let url = '/api/elevation'
    if (source) url = `${url}/${source}`
    return this.execute('post', url, coordinates)
  },
  getStravaRoute (id) {
    // return information for Strava route ID
    return this.execute('get', `/api/strava/route/${id}`)
  },
  getStravaRouteGPX (id) {
    // return gpx file for Strava route ID
    return this.execute('get', `/api/strava/route/${id}/gpx`)
  },
  emailUsers (data) {
    return this.executeAuth('post', '/api/email', data)
  },
  patreonGetLogin () {
    return this.executeAuth('get', '/api/patreon/url')
  },
  patreonUpdateUser (code) {
    return this.executeAuth('put', `/api/patreon/user/${code}`)
  },
  patreonPatronsRefresh () {
    return this.executeAuth('get', '/api/patreon/patrons/refresh')
  }
}
