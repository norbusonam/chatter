const createMessage = require("../controller/message/create");

module.exports = (io) => {
  
  io.on('connect', (socket) => {

    socket.on('message:create', createMessage(io))

  });

}