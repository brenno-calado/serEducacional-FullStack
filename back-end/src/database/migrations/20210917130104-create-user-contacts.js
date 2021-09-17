module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserContacts', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      contactId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contacts',
          key: 'contactId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserContacts');
  }
};
