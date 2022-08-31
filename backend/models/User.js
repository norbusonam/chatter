const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },

}, {

  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },

});

module.exports = mongoose.model('User', userSchema)