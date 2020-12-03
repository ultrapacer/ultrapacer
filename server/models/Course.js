var mongoose = require('mongoose')
var Schema = mongoose.Schema
const Waypoint = require('./Waypoint')
const Plan = require('./Plan')

// Define collection and schema for Posts
var CourseSchema = new Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String
  },
  link: {
    type: String,
    unique: true
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
  override: {
    enabled: {
      type: Boolean,
      default: false
    },
    distUnit: {
      type: String
    },
    elevUnit: {
      type: String
    },
    default: {
      enabled: false
    }
  },
  public: {
    type: Boolean,
    default: false
  },
  eventStart: {
    type: Date,
    default: null
  },
  eventTimezone: {
    type: String,
    default: null
  },
  _plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  },
  plans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan'
  }],
  points: [],
  raw: [],
  source: {},
  altModel: {},
  waypoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Waypoint'
  }],
  cache: {}
}, {
  collection: 'courses'
})

CourseSchema.methods.addData = async function (user = null, plan = null) {
  // adds waypoints, plans, altitude model, and selected plan to course object
  if (user) {
    [this.waypoints, this.plans] = await Promise.all([
      await Waypoint.find({ _course: this }).sort('location').exec(),
      await Plan.find({ _course: this, _user: user }).sort('name').exec()
    ])
    this.altModel = user.altModel
  } else {
    this.waypoints = await Waypoint.find({ _course: this }).sort('location').exec()
    this.plans = []
    this.altModel = null
  }
  if (plan) {
    this._plan = plan
  } else {
    this._plan = null
  }
}

CourseSchema.methods.clearCache = async function () {
  await Promise.all([
    this.updateOne({ cache: null }),
    Plan.updateMany({ _course: this }, { cache: null })
  ])
}

CourseSchema.pre('remove', function () {
  Plan.deleteMany({_course: this._id}).exec()
  Waypoint.deleteMany({_course: this._id}).exec()
})

module.exports = mongoose.model('Course', CourseSchema)
