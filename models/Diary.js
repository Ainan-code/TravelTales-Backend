
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
          
        },
        coordinates: {
          type: [Number],
         
        }
      }
});

module.exports = mongoose.model('Diary', DiarySchema);