const { login: loginValidate } = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginValidate({ email, password });
  return res.status(200).json(result);
};

module.exports = {
  login,
}
