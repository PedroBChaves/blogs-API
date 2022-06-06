const routerLogin = require('express').Router();
const loginController = require('../controllers/loginController');

routerLogin.post('/login', loginController);

module.exports = routerLogin;