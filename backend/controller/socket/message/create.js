const Message = require('../../../models/Message');

module.exports = (io) => {
  return async (message) => {
    const createdMessage = await Message.create(message);
    io.to(message.room).emit('message:new', createdMessage)
  }
}