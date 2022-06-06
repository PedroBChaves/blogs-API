const { User } = require('../database/models');
const generateToken = require('../helpers/generateToken');
const helpers = require('../helpers');

const create = async (displayName, email, password, image) => {
  helpers.validateUser(displayName, email, password);
  const isAlreadyUser = await User.findOne({ where: { email } });
  if (isAlreadyUser) {
    const e = JSON.stringify({
      code: helpers.HTTP_STATUS_CONFLICT,
      message: 'User already registered',
    });
    throw new Error(e);
  }
  await User.create({ displayName, email, password, image });

  const token = generateToken(displayName, email, image);
  return token;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getByID = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) {
    const e = JSON.stringify({
      code: helpers.HTTP_STATUS_NOT_FOUND,
      message: 'User does not exist',
    });
    throw new Error(e);
  }
  return user;
};

module.exports = {
  create,
  getAll,
  getByID,
};