"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "PotentialPuzzles",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        sgf_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Sgfs", key: "id" },
        },

        category: {
          allowNull: true,
          type: Sequelize.STRING,
          defaultValue: "other",
        },
        move_number: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        solution_coordinates: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        difficulty: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 1500,
        },
        job_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        status: {
          allowNull: true,
          // ENUM is a data type consisting of a set of named values, can't just be any random string value
          type: Sequelize.ENUM("queued", "processing", "completed", "failed"),
          defaultValue: "queued",
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
    await queryInterface.dropTable("PotentialPuzzles", options);
  },
};
