"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Users.associate = function(models) {
    // associations can be defined here
    Users.belongsTo(models.Empresas, { foreignKey: "EmpresasId" });
    Users.belongsTo(models.Roles, { foreignKey: "RolesId" });
    Users.hasMany(models.Compras, { foreignKey: "UsersId", as: "Compras" });
    Users.hasMany(models.Vendas, { foreignKey: "UsersId", as: "Vendas" });
  };
  return Users;
};
