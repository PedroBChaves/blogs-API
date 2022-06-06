const userService = require('../services/userService');
const helpers = require('../helpers');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.create(displayName, email, password, image);

    return res.status(helpers.HTTP_STATUS_CREATED).json({ token });
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();

    return res.status(helpers.HTTP_STATUS_OK).json(users);
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getByID(id);

    return res.status(helpers.HTTP_STATUS_OK).json(user);
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  create,
  getAll,
  getByID,
};