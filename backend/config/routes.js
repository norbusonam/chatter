const createUser = require('../controller/user/create');
const loginUser = require('../controller/user/login');
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
  app.post('/user/login', loginUser);
  app.post('/user/signup', createUser);
  app.get('/user/me', checkAuth, getMe);
  app.get('/user/:username', getUser);

  // user in room routes
  app.post('/user-in-room', createUserInRoom)

}