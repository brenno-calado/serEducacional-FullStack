module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: 'Users',
  });

  return User;
};
