const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    required: true,
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
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },

});

module.exports = mongoose.model('User', userSchema)