const UserInRoom = require('../../models/UserInRoom');

module.exports = async (req, res, next) => {

  const roomId = req.params.roomId;
  const userId = req.userId;

  console.log([roomId, userId])

  const userInRoom = await UserInRoom.findOne({
    room: roomId,
    user: userId,
  });

  console.log(userInRoom)

  if (!!userInRoom) {
    return next();
  }

  console.log('TOURE NORT IN THIS ROOM')
  return res.sendStatus(403);
}