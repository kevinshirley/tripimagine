const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  tripId: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: Number,
    required: true
  },
  cloudUrl: {
    type: String,
    required: true
  },
  dateWhen: {
    type: String,
    required: true
  },
  dateRegistered: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('file', FileSchema);