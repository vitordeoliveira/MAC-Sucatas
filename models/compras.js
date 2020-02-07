"use strict";
module.exports = (sequelize, DataTypes) => {
  const Compras = sequelize.define(
    "Compras",
    {
      value: DataTypes.DECIMAL(10, 2),
      amount: DataTypes.INTEGER
    },
    {}
  );
  Compras.associate = function(models) {
    // associations can be defined here
    Compras.belongsTo(models.Users, { foreignKey: "UsersId" });
    Compras.belongsTo(models.Produtos, { foreignKey: "ProdutosId" });
    Compras.belongsTo(models.Fornecedores, { foreignKey: "FornecedoresId" });
  };
  return Compras;
};
