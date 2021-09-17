'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('UserContacts',
  [
    {
      userId: 2,
      contactId: 2,
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('UserContacts', null, {}),
};
