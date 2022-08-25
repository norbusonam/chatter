const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1,
  },
  description: {
    type: String,
    required: true,
  },

}, {

  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

module.exports = mongoose.model('Room', roomSchema)