const { param } = require("express-validator");
const UserInRoom = require("../../../models/UserInRoom");

module.exports = {

  validations: [
    param('roomId')
      .isString(),
  ],

  fn: async (req, res) => {

    const userId = req.userId;
    const { roomId } = req.params;

    const existingUserInRoom = await UserInRoom.findOne({
      room: roomId,
      user: userId,
    });

    if (!!existingUserInRoom) {
      return res.sendStatus(400);
    }

    await UserInRoom.create({
      room: roomId,
      user: userId,
    });

    return res.sendStatus(201);

  }

}