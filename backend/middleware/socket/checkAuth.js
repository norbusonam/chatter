const jwt = require('jsonwebtoken');

module.exports = (socket, next) => {

  const authorizationToken = socket.handshake.auth.token;

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
      socket.userId = decodedToken.userId;
      return next();
    }
  }
  
  next(new Error("user is not authorized"));

}