const createMessage = require('../controller/socket/message/create');
const joinRoom = require('../controller/socket/room/join');
const leaveRoom = require('../controller/socket/room/leave');
const checkAuth = require('../middleware/socket/checkAuth');
checkAuth

module.exports = (io) => {

  // io.use(checkAuth);
  
  io.on('connection', (socket) => {

    // message events
    socket.on('message:create', createMessage(socket, io));;

    // room events
    socket.on('room:join', joinRoom(socket));
    socket.on('room:leave', leaveRoom(socket));

  });

}