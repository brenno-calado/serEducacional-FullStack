const contact = require('../services/contact');

const create = async (req, res) => {
  const { authorization } = req.headers;
  const newContact = req.body;
  const result = await contact.create(authorization, newContact);
  return res.status(201).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await contact.findById(id, authorization);
  return res.status(200).json(result);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { authorization } = req.headers;
  const result = await contact.updateStatus({ id, body }, authorization);
  return res.status(200).json(result);
};

module.exports = {
  create,
  findById,
  updateStatus,
};
