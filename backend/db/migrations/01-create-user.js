"use strict";

// let options = {};

// if (process.env.NODE_ENV === "production" && process.env.SCHEMA) {
//   options.schema = process.env.SCHEMA;
// }

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
          // added unique here, it was in the email, but needs to be here too!
          unique: true,
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
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 1000,
        },
        solved_puzzles: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        isAdmin: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false
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
