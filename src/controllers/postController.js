const postService = require('../services/postService');
const helpers = require('../helpers');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const post = await postService(title, content, categoryIds);

    return res.status(helpers.HTTP_STATUS_CREATED).json(post);
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = create;