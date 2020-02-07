"use strict";
module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define(
    "Produtos",
    {
      name: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      balanceStock: DataTypes.DECIMAL,
      balance: DataTypes.DECIMAL,
      compra: DataTypes.DECIMAL,
      venda: DataTypes.DECIMAL
    },
    {}
  );
  Produtos.associate = function(models) {
    // associations can be defined here
    Produtos.belongsTo(models.Empresas, { foreignKey: "EmpresasId" });
    Produtos.hasMany(models.Compras, {
      foreignKey: "ProdutosId",
      as: "Compras"
    });
    Produtos.hasMany(models.Vendas, { foreignKey: "ProdutosId", as: "Vendas" });
  };
  return Produtos;
};
