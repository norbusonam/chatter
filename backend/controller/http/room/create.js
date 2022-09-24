const Room = require('../../../models/Room');
const UserInRoom = require('../../../models/UserInRoom');
const { body } = require('express-validator');

module.exports = {

  validations: [
    body('name')
      .isString()
      .isLength({ 
        min: 5,
        max: 25,
      }),
    body('emoji')
      .isString()
      .isLength({
        min: 1,
        max: 3,
      }),
    body('description')
      .isString(),
  ],
  
  fn: async (req, res) => {

    const payload = req.body;

    const room = await Room.create(payload);
    await UserInRoom.create({
      user: req.userId,
      room: room.id,
    });

    return res.send({
      room
    });

  }
}