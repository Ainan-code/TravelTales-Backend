
// models/Users
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
   
    
  },
});

module.exports = mongoose.model('User', UserSchema);