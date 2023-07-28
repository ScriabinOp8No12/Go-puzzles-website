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
        // ****** removed sgf_mistake_move_numbers and game_preview from migration and model
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
          // changed back to TEXT because SGF data > 255 characters
          type: Sequelize.TEXT,
        },
        sgf_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        // player, rank, and result can all be empty or null
        black_player: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: "?",
        },
        white_player: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: "?",
        },
        black_rank: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: "?",
        },
        white_rank: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: "?",
        },
        result: {
          allowNull: false,
          type: Sequelize.STRING,
          defaultValue: "?",
        },
        thumbnail: {
          allowNull: false,
          type: Sequelize.TEXT,
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
