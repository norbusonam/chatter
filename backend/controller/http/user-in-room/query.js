const { param } = require("express-validator");
const UserInRoom = require("../../models/UserInRoom");

module.exports = {

  validations: [
    param('roomId')
      .isString(),
  ],

  fn: async (req, res) => {

    const roomId = req.params.roomId;

    const usersInRoom = await UserInRoom.find({
      room: roomId,
    }).populate('user');

    return res.send({
      users: usersInRoom.map(userInRoom => userInRoom.user),
    });

  }
  
}