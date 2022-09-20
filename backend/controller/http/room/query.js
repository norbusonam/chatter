const { query } = require('express-validator');
const Room = require('../../../models/Room');
const UserInRoom = require('../../../models/UserInRoom');


module.exports = {

  validations: [
    query('query')
      .isString()
      .optional(),
    query('onlyMine')
      .isBoolean()
      .isIn(['true', 'false']),
  ],
  
  fn: async (req, res) => {

    const { query, onlyMine } = req.query

    const filter = {}

    if (!!query) {
     filter.$or = [
        { name: new RegExp(query, "i") },
        { description: new RegExp(query, "i") },
      ];
    }

    // TODO: find a better way to parse query booleans
    if (onlyMine.toLowerCase() === 'true') {
      const userRooms = await UserInRoom.find(
        { user: req.userId },
        ['room']
      );
      filter._id = {
        $in: userRooms.map(userRoom => userRoom.room),
      };
    }

    const rooms = await Room.find(filter);

    return res.send({
      rooms
    });

  }

}