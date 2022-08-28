const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

  console.log(req.body)

  const payload = req.body;
  
  // check email exists
  const userWithEmail = await User.findOne({
    email: payload.email
  })
  if (!!userWithEmail) {
    return res
      .status(401)
      .send('User with email exists');
  }

  // check username exists
  const userWithUsername = await User.findOne({
    username: payload.username
  })
  if (!!userWithUsername) {
    return res
      .status(401)
      .send('A user with that username already exists');
  }

  // hash password, create use
  let hashedPassword = await bcrypt.hash(payload.password, 10);
  payload.password = hashedPassword;
  const user = await User.create(payload);

  const token = jwt.sign({
    userId: user.id
  }, process.env.TOKEN_SECRET);

  res.status(201).send({
    user,
    token
  });

}