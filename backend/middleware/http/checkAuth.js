const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const authorizationToken = req.headers['authorization'];

  if (authorizationToken) {
    const token = authorizationToken.split(' ')[1];
    let verifySuccess = true;
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch(err) {
      verifySuccess = false;
    }
    if (verifySuccess && decodedToken && decodedToken.userId) {
      req.userId = decodedToken.userId;
      return next();
    }
  }

  return res.sendStatus(403);

}