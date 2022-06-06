const categoryService = require('../services/categoryService');
const helpers = require('../helpers');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoryService.create(name);

    return res.status(helpers.HTTP_STATUS_CREATED).json(category);
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();

    return res.status(helpers.HTTP_STATUS_OK).json(categories);
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  create,
  getAll,
};