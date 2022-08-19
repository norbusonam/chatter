module.exports = (io) => {

  const createMessage = (msg) => {
    // TODO: store the message persistently
    io.emit('new:message', msg);
  }

  return createMessage;

}