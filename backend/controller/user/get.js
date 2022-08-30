const User = require('../../models/User');

const { param } = require('express-validator')

module.exports = {

  validations: [
    param('username')
      .isString(),
  ],

  fn: async (req, res) => {

    const { username } = req.params;

    const user = await User.findOne({
      username
    })

    // check exists
    if (!user) {
      return res
        .status(404)
        .send('User not found');
    }

    return res.send({
      user
    })
  }

}