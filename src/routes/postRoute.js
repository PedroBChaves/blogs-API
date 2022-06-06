const routerPost = require('express').Router();
const postController = require('../controllers/postController');
const validateToken = require('../helpers/validateToken');

routerPost.post('/post', validateToken, postController);

module.exports = routerPost;