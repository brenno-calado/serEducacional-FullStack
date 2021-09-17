require('dotenv').config();

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  development: "-dev",
  dev: "-dev",
  test: "-test",
};

const options = {
  host: process.env.MYSQL_HOST || 'mysql',
  port: process.env.MYSQL_PORT || '3306',
  database:
    `${process.env.MYSQL_DB_NAME || 'contact-list'}${suffix[environment] || suffix.dev}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: true,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
