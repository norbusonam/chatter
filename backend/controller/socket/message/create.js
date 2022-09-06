const Message = require('../../../models/Message');

module.exports = (socket, io) => {
  return (roomId, messageBody) => {

    const userId = socket.userId;

    const message = await Message.create({
      from: userId,
      room: roomId,
      body: messageBody,
    })

    io.emit('message:new', message)
  }
}