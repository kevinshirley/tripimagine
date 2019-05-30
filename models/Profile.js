const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  gender: {
    type: String,
    required: true
  },
  timezone: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  phoneNumber: {
    type: Number,
    default: true
  },
  notificationViaText: {
    type: Boolean,
    default: false
  },
  trip: [
    {
      destination: {
        type: String,
        required: true
      },
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      },
      numberOfPeople: {
        type: String,
        required: true
      },
      status: {
        type: String,
        default: 'Active'
      },
      budget: {
        type: Number,
        default: 0
      },
      message: {
        type: String,
        required: true
      },
      phaseStopped: {
        type: String
      },
      reasonStopped: {
        type: String
      },
      offerAccepted: {
        type: String
      },
      dateReceived: {
        type: Date,
        default: Date.now
      },
    }
  ],
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  dateRegistered: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);