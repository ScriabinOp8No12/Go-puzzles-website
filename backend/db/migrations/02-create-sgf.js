"use strict";

// this block below HAS to go in every migration and seeder that we create!
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Sgfs",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Users", key: "id" },
        },
        sgf_data: {
          allowNull: false,
          // changed from .TEXT to .STRING
          type: Sequelize.TEXT,
        },
        sgf_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        black_player: {
          type: Sequelize.STRING,
        },
        white_player: {
          type: Sequelize.STRING,
        },
        black_rank: {
          type: Sequelize.STRING,
        },
        white_rank: {
          type: Sequelize.STRING,
        },
        mistake_move_numbers: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        game_preview: {
          allowNull: false,
          type: Sequelize.STRING,
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
    await queryInterface.dropTable("Sgfs", options);
  },
};
