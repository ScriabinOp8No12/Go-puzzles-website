"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          allowNull: false,
          // max username characters 30
          type: Sequelize.STRING(30),
        },
        email: {
          allowNull: false,
          unique: true,
          // max email characters 256
          type: Sequelize.STRING(256),
        },
        hashedPassword: {
          allowNull: false,
          type: Sequelize.STRING.BINARY,
        },
        rank: {
          // ALLOW NULL because won't have initial data to know what rank the user is
          type: Sequelize.INTEGER,
        },
        solved_puzzles: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users", options);
  },
};
