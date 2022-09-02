const { param, query } = require('express-validator');

module.exports = {

  validations: [
    param('roomId')
      .isString(),
    query('before')
      .isDate(),
    query('limit')
      .isInt()
      .default(30),
  ],

  fn: (req, res) => {
    
  }
  
}