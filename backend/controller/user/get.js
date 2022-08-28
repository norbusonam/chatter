const User = require('../../models/User');

module.exports = async (req, res) => {

  const { username } = req.params;

  const user = await User.findOne({
    username
  })

  // check exists
  if (!user) {
    return res.sendStatus(404);
  }

  return res.send({
    user
  })

}