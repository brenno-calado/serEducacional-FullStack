module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    contactId: { type: DataTypes.INTEGER, primaryKey: true },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    nascimento: DataTypes.DATE,
    endereco: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'Contacts',
  });

  return Contact;
};
