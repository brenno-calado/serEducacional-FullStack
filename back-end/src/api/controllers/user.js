const users = require('../services/user');

const create = async (req, res) => {
  const { name, email, password, role } = req.body;
  const result = await users.create({ name, email, password, role });
  return res.status(201).json(result);
};

const getContacts = async (req, res) => {
  const { authorization } = req.headers;
  const result = await users.getContacts(authorization);
  return res.status(200).json(result);
};

module.exports = {
  create,
  getContacts,
};
