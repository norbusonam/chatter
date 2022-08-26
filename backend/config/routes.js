const createUser = require('../controller/user/create');
const getUser = require('../controller/user/get');
const getMe = require('../controller/user/me');
const createRoom = require('../controller/room/create');
const queryRooms = require('../controller/room/query');
const createUserInRoom = require('../controller/user-in-room/create');
const checkAuth = require('../middleware/http/checkAuth');

module.exports = (app) => {

  // room routes
  app.post('/room', createRoom);
  app.get('/room', queryRooms);

  // user routes
  app.post('/user', createUser);
  app.get('/user/:id', getUser);
  app.get('/user/me', checkAuth, getMe);

  // user in room routes
  app.post('/user-in-room', createUserInRoom)

}