const Message = require('../../../models/Message');
const getUserIdFromToken = require('../../../middleware/socket/getUserIdFromToken');

module.exports = (io) => {
  return async (authToken, message) => {

    const userId = getUserIdFromToken(authToken);

    if (!!userId && userId === message.from) {
      const newMessage = await Message.create(message);
      await newMessage.populate('from', ['username', 'name']);
      io.to(message.room).emit('message:new', newMessage);
    }

  }
}