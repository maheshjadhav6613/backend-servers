const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  color: { type: String, required: true },
  emails: { type: [String], required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
