const createUser = require('../controller/user/create');
const loginUser = require('../controller/user/login');
const getUser = require('../controller/user/get');
const getMe = require('../controller/user/me');
const createRoom = require('../controller/room/create');
const queryRooms = require('../controller/room/query');
const joinRoom = require('../controller/user-in-room/create');
const queryUsersInRoom = require('../controller/user-in-room/query');
const leaveRoom = require('../controller/user-in-room/delete');
const queryMessages = require('../controller/message/query');
const checkAuth = require('../middleware/http/checkAuth');
const validate = require('../middleware/http/validate');
const userIsInRoom = require('../middleware/http/userIsInRoom');

module.exports = (app) => {

  // user routes
  app.post   ('/user/login', validate(loginUser.validations), loginUser.fn);
  app.post   ('/user/signup', validate(createUser.validations), createUser.fn);
  app.get    ('/user/me', checkAuth, getMe.fn);
  app.get    ('/user/:username', validate(getUser.validations), getUser.fn);

  // room routes
  app.post   ('/room', checkAuth, validate(createRoom.validations), createRoom.fn);
  app.get    ('/room', checkAuth, validate(queryRooms.validations), queryRooms.fn);
  
  // user in room routes
  app.post   ('/room/:roomId/user', checkAuth, validate(joinRoom.validations), joinRoom.fn);
  app.delete ('/room/:roomId/user', checkAuth, userIsInRoom, validate(leaveRoom.validations), leaveRoom.fn);
  app.get    ('/room/:roomId/user', checkAuth, userIsInRoom, validate(queryUsersInRoom.validations), queryUsersInRoom.fn);

  // message routes
  app.get    ('/room/:roomId/message', checkAuth, userIsInRoom, validate(queryMessages.validations), queryMessages.fn);

}