"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmpresasId: {
        type: Sequelize.INTEGER,
        references: { model: "Empresas", key: "id" },
        allowNull: false,
        onDelete: "Cascade"
      },
      RolesId: {
        type: Sequelize.INTEGER,
        references: { model: "Roles", key: "id" },
        allowNull: false,
        onDelete: "Cascade"
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("Users");
  }
};
