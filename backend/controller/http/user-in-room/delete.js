const { param } = require("express-validator");
const UserInRoom = require("../../models/UserInRoom");

module.exports = {

  validations: [
    param('roomId')
      .isString(),
  ],

  fn: async (req, res) => {

    const userId = req.userId;
    const roomId = req.params.roomId;

    await UserInRoom.deleteOne({
      room: roomId,
      user: userId,
    });

    return res.sendStatus(200);

  }
  
}