"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Produtos", "venda", {
      type: Sequelize.DECIMAL(10, 5),
      defaultValue: 0,
      after: "compra"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Produtos", "venda");
  }
};
