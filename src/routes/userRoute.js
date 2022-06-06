const routerUser = require('express').Router();
const userController = require('../controllers/userController');
const validateToken = require('../helpers/validateToken');

routerUser.get('/user', validateToken, userController.getAll);
routerUser.get('/user/:id', validateToken, userController.getByID);
routerUser.post('/user', userController.create);

module.exports = routerUser;