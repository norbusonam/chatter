const { query } = require('express-validator');
const Room = require('../../models/Room');
const UserInRoom = require('../../models/UserInRoom');


module.exports = {

  validations: [
    query('query')
      .isString(),
    query('onlyMine')
      .isBoolean()
      .isIn(['true', 'false']),
  ],
  
  fn: async (req, res) => {

    const { query, onlyMine } = req.query

    const filter = {
      $or: [
        { name: { $regex: '.*' + query + '.*' } },
        { description: { $regex: '.*' + query + '.*' } },
      ],
    }

    // TODO: find a better way to parse query booleans
    if (onlyMine.toLowerCase() === 'true') {
      const userRooms = await UserInRoom.find(
        { user: req.userId },
        ['room']
      );
      console.log(userRooms.map(userRoom => userRoom.room));
      filter._id = {
        $in: userRooms.map(userRoom => userRoom.room),
      };
    }

    console.log(filter);

    const rooms = await Room.find(filter);

    return res.send(rooms);

  }

}