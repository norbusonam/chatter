const createMessage = require('../controller/socket/message/create');
const enterRoom = require('../controller/socket/room/enter');
const exitRoom = require('../controller/socket/room/exit');

module.exports = (io) => {
  
  io.on('connection', (socket) => {

    // message events
    socket.on('message:create', createMessage(io));;

    // room events
    socket.on('room:enter', enterRoom(socket));
    socket.on('room:exit', exitRoom(socket));

  });

}