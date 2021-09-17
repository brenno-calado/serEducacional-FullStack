const { Contact, User, UserContact } = require('../../database/models');
const { isValidSaleField } = require('./utils/contactValidate');
const { isValidToken } = require('./utils/tokenValidate');

const create = async (authorization, contact) => {
  const dataValues = isValidToken(authorization);
  const { userId } = dataValues;

  const result = await Contact.create(contact);
  console.log(result);
  const { null: contactId } = result;
  console.log(contactId);
  UserContact.create(
    { userId, contactId },
  );
  return { contactId };
};

const findById = async (id, authorization) => {
  isValidToken(authorization);
  
  const result = await Contact.findByPk(id, {
    attributes: { exclude: ['userId', 'sellerId'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    ],
  });

  return result;
};

const updateStatus = async (sale, authorization) => {
  isValidToken(authorization);
  await isValidSaleField(sale);
  await Contact.update({ status: sale.status }, { where: { id: sale.id } });
  return { message: 'status updated successfully' };
};

module.exports = {
  create,
  findById,
  updateStatus,
};
