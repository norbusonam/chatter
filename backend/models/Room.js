const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
  },
  emoji: {
    type: String,
    required: true,
    minLength: 2,     // for some reason, emojis count as
    maxLength: 2,     // two characters 🤦‍♂️
  },
  description: {
    type: String,
    required: true,
  },

}, {

  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },

});

module.exports = mongoose.model('Room', roomSchema)