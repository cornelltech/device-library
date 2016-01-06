'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  staffPick: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Device'
  }
});

mongoose.model('Category', schema);