const { param, query } = require('express-validator');
const Message = require('../../../models/Message');

module.exports = {

  validations: [
    param('roomId')
      .isString(),
    query('before')
      .isISO8601(),
    query('limit')
      .isInt()
      .default(30),
  ],

  fn: async (req, res) => {

    const roomId = req.params.room;
    const { before, limit } = req.query

    const messages = await Message.find({
      createdAt: {
        $lt: before
      },
      to: roomId
    })
    .limit(limit)
    .sort('createdAt');

    return res.send({
      messages,
    });

  }
  
}