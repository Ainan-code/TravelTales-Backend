
const mongoose = require('mongoose');

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
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
});

module.exports = mongoose.model('Diary', DiarySchema);