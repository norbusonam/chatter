const mongoose = require('mongoose');

const userInRoomSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },

}, {

  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },

});

module.exports = mongoose.model('UserInRoom', userInRoomSchema)