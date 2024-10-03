
const mongoose = require('mongoose');
const User = require('../models/Users');

const DiarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
 
  location: {
    type: String,
    required: true
      },

  author: {type: String, required: true},
});

module.exports = mongoose.model('Diary', DiarySchema);