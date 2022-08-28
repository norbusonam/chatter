const User = require('../../models/User');

module.exports = async (req, res) => {

  const user = await User.findById(req.userId);

  return res.send({
    user
  })

}