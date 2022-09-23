const Message = require('../../../models/Message');

module.exports = (io) => {
  return async (message) => {
    // TODO: validate user!
    const newMessage = await Message.create(message);
    await newMessage.populate('from', ['username']);
    io.to(message.room).emit('message:new', newMessage);
  }
}