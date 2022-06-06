const { User } = require('../database/models');
const generateToken = require('../helpers/generateToken');
const helpers = require('../helpers');

const login = async (email, password) => {
  helpers.validateLogin(email, password);
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    const e = JSON.stringify({
      code: helpers.HTTP_STATUS_BAD_REQUEST,
      message: 'Invalid fields',
    });
    throw new Error(e);
  }

  const token = generateToken(email, password);
  return token;
};

module.exports = login;