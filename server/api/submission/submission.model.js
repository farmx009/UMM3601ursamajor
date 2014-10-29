'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubmissionSchema = new Schema({
  title: String,
  format: String,
  abstract: String,
  presentationType: String,
  formatChange: Boolean,
  presenterInfo: {first: String, last: String, email: String},
  copresenterOneInfo: {first: String, last: String, email: String},
  copresenterTwoInfo: {first: String, last: String, email: String},
  discipline: String,
  sponsors: [],
  adviserInfo: {name: String, email: String},
  featured: Boolean,
  mediaServicesEquipment: String,
  specialRequirements: String,
  presenterTeeSize: String,
  otherInfo: String,
  approval: Boolean,
  status: {strict: String, text: String}
});

module.exports = mongoose.model('Submission', SubmissionSchema);