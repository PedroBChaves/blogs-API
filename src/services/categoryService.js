const { Category } = require('../database/models');
const helpers = require('../helpers');

const create = async (name) => {
  helpers.validateCategory(name);
  const isAlreadyCategory = await Category.findOne({ where: { name } });
  if (isAlreadyCategory) {
    const e = JSON.stringify({
      code: helpers.HTTP_STATUS_CONFLICT,
      message: 'Category already registered',
    });
    throw new Error(e);
  }
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};