'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Contacts',
    [
      {
        nome: 'Leonardo',
        sobrenome: 'Costa',
        telefone: '99224321',
        nascimento: '1981-08-21',
        endereco: 'Rua da Palha, 21',
        email: 'leo@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        nome: 'Eduardo',
        sobrenome: 'Costa',
        telefone: '99224321',
        nascimento: '1981-08-21',
        endereco: 'Rua da Palha, 21',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Contacts', null, {}),
};