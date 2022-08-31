const { query } = require('express-validator');
const Room = require('../../models/Room');


module.exports = {

  validations: [
    query('query')
      .isString(),
  ],
  
  fn: async (req, res) => {

    const { query } = req.query

    const rooms = await Room.find({
      $or: [
        { name: { $regex: '.*' + query + '.*' } },
        { description: { $regex: '.*' + query + '.*' } },
      ]
    });

    return res.send(rooms);

  }

}