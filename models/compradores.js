"use strict";
module.exports = (sequelize, DataTypes) => {
  const Compradores = sequelize.define(
    "Compradores",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Compradores.associate = function(models) {
    // associations can be defined here
    Compradores.hasMany(models.Vendas, {
      foreignKey: "CompradoresId",
      as: "Vendas"
    });
  };
  return Compradores;
};
