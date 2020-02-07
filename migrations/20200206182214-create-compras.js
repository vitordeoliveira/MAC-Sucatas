"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Compras", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UsersId: {
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
        allowNull: false,
        onDelete: "Cascade"
      },
      ProdutosId: {
        type: Sequelize.INTEGER,
        references: { model: "Produtos", key: "id" },
        allowNull: false,
        onDelete: "Cascade"
      },
      FornecedoresId: {
        type: Sequelize.INTEGER,
        references: { model: "Fornecedores", key: "id" },
        allowNull: false,
        onDelete: "Cascade"
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Compras");
  }
};
