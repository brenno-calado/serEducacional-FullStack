module.exports = (sequelize, _DataTypes) => {
  const UserContact = sequelize.define('UserContact',
    {},
    { timestamps: false, tableName: 'UserContacts' },
  );

  UserContact.associate = (models) => {
    models.Contact.belongsToMany(models.User, {
      as: 'users',
      through: UserContact,
      foreignKey: 'contactId',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Contact, {
      as: 'contacts',
      through: UserContact,
      foreignKey: 'userId',
      otherKey: 'contactId',
    });
  };

  return UserContact;
};
