module.exports = (socket) => {
  return ({ room }) => {
    socket.join(room);
  }
}