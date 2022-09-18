module.exports = (socket) => {
  return ({ room }) => {
    socket.leave(room);
  }
}