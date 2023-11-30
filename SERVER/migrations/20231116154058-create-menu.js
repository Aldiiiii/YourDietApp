"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Menus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      historyId: {
        type: Sequelize.INTEGER,
        references: { model: "Histories", key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      breakfast: {
        type: Sequelize.STRING,
      },
      breakfastCalorie: {
        type: Sequelize.INTEGER,
      },
      breakfastEaten: {
        type: Sequelize.BOOLEAN,
      },
      lunch: {
        type: Sequelize.STRING,
      },
      lunchCalorie: {
        type: Sequelize.INTEGER,
      },
      lunchEaten: {
        type: Sequelize.BOOLEAN,
      },
      dinner: {
        type: Sequelize.STRING,
      },
      dinnerCalorie: {
        type: Sequelize.INTEGER,
      },
      dinnerEaten: {
        type: Sequelize.BOOLEAN,
      },
      snack: {
        type: Sequelize.STRING,
      },
      snackCalorie: {
        type: Sequelize.INTEGER,
      },
      snackEaten: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Menus");
  },
};
