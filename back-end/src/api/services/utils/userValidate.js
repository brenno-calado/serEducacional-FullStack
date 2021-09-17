const md5 = require('md5');
const { User } = require('../../../database/models');
const { BadRequest, Conflict, NotFound } = require('../../utils/httpStatus');

const validRoles = {
  administrator: 'administrator',
  seller: 'seller',
  customer: 'customer',
};

const isValidEmail = (email) => {
  if (!email) {
    const error = { type: BadRequest, message: '"email" is required' };
    throw error;
  }

  const isValidEmailFormat = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
  if (!isValidEmailFormat) {
    const error = { type: BadRequest, message: '"email" must be valid' };
    throw error;
  }
  return true;
};

const isValidName = (name) => {
  if (!name) {
    const error = { type: BadRequest, message: '"name" is required' };
    throw error;
  }

  if (name.length < 12) {
    const error = { 
      type: BadRequest,
      message: '"Name" length must be at least 12 characters long',
    };
    throw error;
  }
  return true;
};

const isValidPassword = (password) => {
  if (!password) {
    const error = { type: BadRequest, message: '"password" is required' };
    throw error;
  }

  const isValidPasswordFormat = /[0-9a-zA-Z$*&@#_]{6}/.test(password);
  if (!isValidPasswordFormat) {
    const error = { type: BadRequest, message: '"password" must have at least 6 characters' };
    throw error;
  }
  return true;
};

const isValidUserLogin = async (email, passwd) => {
  const emailExists = await User.findOne({ where: { email } });
  const password = md5(passwd);

  if (!emailExists || password !== emailExists.dataValues.password) {
    const error = { type: NotFound, message: 'invalid username or password' };
    throw error;
  } 
  return emailExists;
};

const isValidUser = async (email) => {
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) {
    const error = { type: Conflict, message: 'this email is already registered' };
    throw error;
  } 
  return emailExists;
};

const isValidUserFields = async (fields) => {
  const { name, email, password } = fields;
  isValidName(name);
  isValidEmail(email);
  isValidPassword(password);
  await isValidUser(email);
};

const isValidLogin = async (user) => {
  const { email, password } = user;
  isValidEmail(email);
  isValidPassword(password);
  const userData = await isValidUserLogin(email, password);
  
  return userData;
};

module.exports = {
  isValidUserFields,
  isValidLogin,
};
