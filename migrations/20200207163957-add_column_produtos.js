"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Produtos", "compra", {
      type: Sequelize.DECIMAL(10, 5),
      defaultValue: 0,
      after: "balance"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Produtos", "compra");
  }
};
