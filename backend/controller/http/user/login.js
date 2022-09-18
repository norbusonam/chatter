const User = require('../../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator');

module.exports = {

  validations: [
    body('username')
      .isString(),
    body('password')
    .isString(),
  ],
  
  fn: async (req, res) => {

    const payload = req.body;

    const user = await User.findOne({
      username: payload.username
    });

    // check user exists
    if (!user) {
      return res
        .status(404)
        .send('User does not exist');
    }
  
    // check password match
    const passwordMatch = await bcrypt.compare(payload.password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .send('Incorrect password');
    }

    const token = jwt.sign({
      userId: user.id
    }, process.env.TOKEN_SECRET);

    return res.send({
      user,
      token,
    });
  }

}