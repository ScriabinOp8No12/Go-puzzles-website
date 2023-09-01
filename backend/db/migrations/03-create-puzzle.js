"use strict";

// this block below HAS to go in every migration and seeder that we create!
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Puzzles",
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
          // remember "model" here is actually "table" lol
          references: { model: "Sgfs", key: "id" },
        },
        category: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        move_number: {
          // we are assuming that a puzzle is created, then it must have a move number specifying where the puzzle is in the SGF
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        difficulty_rank: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.TEXT,
        },
        completed: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        is_user_puzzle: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        vote_count: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        thumbnail: {
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
    // add index and unique property to ensure user can only add one puzzle per move!
    // await queryInterface.addIndex("Puzzles", ["sgf_id", "move_number"], {
    //   unique: true,
    //   name: "unique_sgf_move_number",
    // });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.removeIndex("Puzzles", "unique_sgf_move_number");
    await queryInterface.dropTable("Puzzles", options);
  },
};
