const UserInRoom = require('../../models/UserInRoom');

module.exports = async (req, res, next) => {

  const roomId = req.params.roomId;
  const userId = req.userId;

  const userInRoom = await UserInRoom.findOne({
    room: roomId,
    user: userId,
  });

  if (!!userInRoom) {
    return next();
  }

  return res.sendStatus(403);
}