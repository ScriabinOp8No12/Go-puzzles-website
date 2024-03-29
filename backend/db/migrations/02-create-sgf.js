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
          // changed back to TEXT because SGF data > 255 characters
          type: Sequelize.TEXT,
        },
        game_date: {
          type: Sequelize.DATE,
        },
        sgf_name: {
          type: Sequelize.STRING,
          defaultValue: "?"
        },
        board_size: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 19
        },
        black_player: {
          type: Sequelize.STRING,
          defaultValue: "?"
        },
        white_player: {
          type: Sequelize.STRING,
          defaultValue: "?"
        },
        black_rank: {
          type: Sequelize.STRING,
          defaultValue: "?"
        },
        white_rank: {
          type: Sequelize.STRING,
          defaultValue: "?"
        },
        komi: {
          type: Sequelize.FLOAT
        },
        result: {
          type: Sequelize.STRING,
          defaultValue: "?"
        },
        thumbnail: {
        // Allow thumbnail to be null initially because we will populate it later with our scripts
          type: Sequelize.STRING,
          defaultValue: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693682857/no_image_thumbnail_tpwuc0.jpg"
        },
        suspended: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
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
