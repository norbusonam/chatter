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

    const { roomId } = req.params;
    const { before, limit } = req.query;

    const messages = await Message.find({
      createdAt: {
        $lte: before,
      },
      room: roomId
    })
    .populate('from', ['username'])
    .sort('-createdAt')
    .limit(limit);

    messages.reverse();

    return res.send({
      messages,
    });

  }
  
}