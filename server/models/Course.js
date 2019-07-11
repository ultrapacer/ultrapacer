var mongoose = require('mongoose')
var Schema = mongoose.Schema
const Waypoint = require('./Waypoint')
const Plan = require('./Plan')
const User = require('./User')

// Define collection and schema for Posts
var CourseSchema = new Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  distance: {
    type: Number
  },
  gain: {
    type: Number
  },
  loss: {
    type: Number
  },
  public: {
    type: Boolean,
    default: false
  },
  _plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  },
  plans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  }],
  points: [{}],
  source: {},
  terrainFactor: {
    type: Number,
    default: null
  },
  altModel: {},
  gradeAdjustment: {
    type: Number
  },
  waypoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Waypoint'
  }]
}, {
  collection: 'courses'
})

CourseSchema.pre('remove', function () {
  Plan.remove({_course: this._id}).exec()
  Waypoint.remove({_course: this._id}).exec()
})

CourseSchema.post('findOne', async function (course, next) {
  let user = await User.findOne({ _id: course._user }).exec()
  course.altModel = user.altModel
  course.plans = await Plan.find({ _course: course }).sort('name').exec()
  course.waypoints = await Waypoint.find({ _course: course }).sort('location').exec()
  next()
})

module.exports = mongoose.model('Course', CourseSchema)
