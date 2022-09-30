const jwt = require('jsonwebtoken');

module.exports = (authorizationToken) => {

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
      return decodedToken.userId;
    }
  }
  
  return null;

}