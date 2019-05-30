import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  json: true
})

export default {
  async executeAuth (method, resource, data) {
    // inject the accessToken for each request
    let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      console.log(req)
      return req.data
    })
  },
  async executePublic (method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      console.log(req)
      return req.data
    })
  },
  getUser () {
    return this.executeAuth('get', `/api/user`)
  },
  updateSettings (id, data) {
    return this.executeAuth('put', `/api/user/${id}`, data)
  },
  getCourses () {
    return this.executeAuth('get', '/api/courses')
  },
  getCourse (id, authenticated) {
    if (typeof (authenticated) === 'undefined' || authenticated) {
      return this.executeAuth('get', `/api/course/${id}`)
    } else {
      return this.executePublic('get', `/api-public/course/${id}`)
    }
  },
  createCourse (data) {
    return this.executeAuth('post', '/api/courses', data)
  },
  updateCourse (id, data) {
    return this.executeAuth('put', `/api/courses/${id}`, data)
  },
  selectCoursePlan (id, data) {
    return this.executeAuth('put', `/api/course/${id}/plan`, data)
  },
  deleteCourse (id) {
    return this.executeAuth('delete', `/api/courses/${id}`)
  },
  getWaypoints (courseID) {
    return this.executeAuth('get', `/api/course/waypoints/${courseID}`)
  },
  createWaypoint (data) {
    return this.executeAuth('post', `/api/waypoint`, data)
  },
  updateWaypoint (id, data) {
    return this.executeAuth('put', `/api/waypoint/${id}`, data)
  },
  updateSegment (id, data) {
    return this.executeAuth('put', `/api/waypoint/${id}/segment`, data)
  },
  deleteWaypoint (id) {
    return this.executeAuth('delete', `/api/waypoint/${id}`)
  },
  getPlans (courseID) {
    return this.executeAuth('get', `/api/course/plans/${courseID}`)
  },
  createPlan (data) {
    return this.executeAuth('post', `/api/plan`, data)
  },
  updatePlan (id, data) {
    return this.executeAuth('put', `/api/plan/${id}`, data)
  },
  deletePlan (id) {
    return this.executeAuth('delete', `/api/plan/${id}`)
  }
}
