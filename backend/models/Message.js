const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({

  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

}, {

  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

module.exports = mongoose.model('Message', messageSchema)