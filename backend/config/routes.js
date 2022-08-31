const createUser = require('../controller/user/create');
const loginUser = require('../controller/user/login');
const getUser = require('../controller/user/get');
const getMe = require('../controller/user/me');
const createRoom = require('../controller/room/create');
const queryRooms = require('../controller/room/query');
const createUserInRoom = require('../controller/user-in-room/create');
const checkAuth = require('../middleware/http/checkAuth');
const validate = require('../middleware/http/validate');

module.exports = (app) => {

  // room routes
  app.post('/room', checkAuth, validate(createRoom.validations), createRoom.fn);
  app.get('/room', queryRooms.fn);

  // user routes
  app.post('/user/login', validate(loginUser.validations), loginUser.fn);
  app.post('/user/signup', validate(createUser.validations), createUser.fn);
  app.get('/user/me', checkAuth, getMe.fn);
  app.get('/user/:username', validate(getUser.validations), getUser.fn);

  // user in room routes
  app.post('/user-in-room', createUserInRoom);

}