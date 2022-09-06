module.exports = (socket) => {
  return (roomId) => {
    socket.join(roomId);
  }
}