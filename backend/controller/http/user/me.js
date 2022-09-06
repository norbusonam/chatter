const User = require('../../../models/User');

module.exports = {
  
  fn: async (req, res) => {

    const user = await User.findById(req.userId);

    if (!user) {
      return res
        .status(403)
        .send('Invalid auth token');
    }

    return res.send({
      user
    })
  }

}