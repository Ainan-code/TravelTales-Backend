
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
  img: {
    type: Buffer,
     },
     location: {
        type: {
          type: String, 
          enum: ['Point'], 
          
        },
        coordinates: {
          type: [Number],
         
        }
      },

      user: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
});

module.exports = mongoose.model('Diary', DiarySchema);