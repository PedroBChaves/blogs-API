const jwt = require('jsonwebtoken');
require('dotenv').config();
const helpers = require('./index');

const secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(helpers.HTTP_STATUS_UNAUTHORIZED).json({ message: 'Token not found' });
    }
    const decode = jwt.verify(token, secret);
    req.user = decode;

    next();
  } catch (error) {
    return res
      .status(helpers.HTTP_STATUS_UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;