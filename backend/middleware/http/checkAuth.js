const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const authorizationToken = req.headers['authorization'];

  if (authorizationToken) {
    const token = authorizationToken.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    if (decodedToken && decodedToken.userId) {
      return next();
    }
  }

  return res.sendStatus(401);

}