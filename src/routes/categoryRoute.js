const routerCategory = require('express').Router();
const categoryController = require('../controllers/categoryController');
const validateToken = require('../helpers/validateToken');

routerCategory.post('/categories', validateToken, categoryController.create);
routerCategory.get('/categories', validateToken, categoryController.getAll);

module.exports = routerCategory;