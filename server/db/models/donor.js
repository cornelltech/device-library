'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  donations: {
    type: String
  },
  date: {
    type: Date
  }
});

mongoose.model('Donor', schema);