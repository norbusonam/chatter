const createMessage = require('../controller/socket/message/create');
const enterRoom = require('../controller/socket/room/enter');
const exitRoom = require('../controller/socket/room/exit');
const checkAuth = require('../middleware/socket/checkAuth');
checkAuth

module.exports = (io) => {

  // io.use(checkAuth);
  
  io.on('connection', (socket) => {

    // message events
    socket.on('message:create', createMessage(io));;

    // room events
    socket.on('room:enter', enterRoom(socket));
    socket.on('room:exit', exitRoom(socket));

  });

}