"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Produtos", "balanceStock", {
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0,
      after: "stock"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Produtos", "balanceStock");
  }
};
