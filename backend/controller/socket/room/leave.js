module.exports = (socket) => {
  return (roomId) => {
    socket.leave(roomId);
  }
}