const Message = require('../../../models/Message');

module.exports = (socket, io) => {
  return async (message) => {
    const createdMessage = await Message.create(message);
    io.emit('message:new', createdMessage)
  }
}