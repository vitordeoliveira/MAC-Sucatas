"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vendas = sequelize.define(
    "Vendas",
    {
      value: DataTypes.DECIMAL,
      amount: DataTypes.INTEGER
    },
    {}
  );
  Vendas.associate = function(models) {
    // associations can be defined here
    Vendas.belongsTo(models.Users, { foreignKey: "UsersId" });
    Vendas.belongsTo(models.Produtos, { foreignKey: "ProdutosId" });
    Vendas.belongsTo(models.Compradores, { foreignKey: "CompradoresId" });
  };
  return Vendas;
};
