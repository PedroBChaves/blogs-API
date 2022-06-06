const { Category, BlogPost, PostCategory } = require('../database/models');
const helpers = require('../helpers');

const validateCategories = async (categoryIds) => {
  const verify = await Category.findAll({ where: { id: categoryIds } });
  if (verify.length === 0) {
    const e = JSON.stringify({
      code: helpers.HTTP_STATUS_BAD_REQUEST,
      message: '"categoryIds" not found',
    });
    throw new Error(e);
  }

  const categories = verify.map((category) => category.id);
  return categories;
};

const create = async (title, content, categoryIds) => {
  helpers.validatePost(title, content, categoryIds);
  const categories = await validateCategories(categoryIds);
  const post = await BlogPost.create({
    userId: 1,
    title,
    content,
  });

  await PostCategory.bulkCreate(categories.map((category) => ({
    postId: post.id,
    categoryId: category,
  })));
  return post;
};

module.exports = create;