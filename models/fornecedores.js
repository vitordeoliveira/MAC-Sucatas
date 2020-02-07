"use strict";
module.exports = (sequelize, DataTypes) => {
  const Fornecedores = sequelize.define(
    "Fornecedores",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Fornecedores.associate = function(models) {
    // associations can be defined here
    Fornecedores.hasMany(models.Compras, {
      foreignKey: "FornecedoresId",
      as: "Compras"
    });
  };
  return Fornecedores;
};
