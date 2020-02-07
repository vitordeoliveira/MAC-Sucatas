"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Produtos", "balance", {
      type: Sequelize.DECIMAL(10, 2),
      defaultValue: 0,
      after: "balanceStock"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Produtos", "balance");
  }
};
