"use strict";
module.exports = (sequelize, DataTypes) => {
  const Empresas = sequelize.define(
    "Empresas",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Empresas.associate = function(models) {
    // associations can be defined here
    Empresas.hasMany(models.Users, { foreignKey: "EmpresasId", as: "Users" });
    Empresas.hasMany(models.Produtos, {
      foreignKey: "EmpresasId",
      as: "Produtos"
    });
  };
  return Empresas;
};
