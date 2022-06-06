const loginService = require('../services/loginService');
const helpers = require('../helpers');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);

    return res.status(helpers.HTTP_STATUS_OK).json({ token });
  } catch (error) {
    const e = JSON.parse(error.message);
    return res.status(e.code).json({ message: e.message });
  }
};

module.exports = login;