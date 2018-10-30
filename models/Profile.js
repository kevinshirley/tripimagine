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
      dateReceived: {
        type: Date,
        default: Date.now
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
      message: {
        type: String,
        required: true
      },
      budget: {
        type: Number,
        default: 0
      },
      phaseStopped: {
        type: String
      },
      reasonStopped: {
        type: String
      },
      offerAccepted: {
        type: String
      }
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