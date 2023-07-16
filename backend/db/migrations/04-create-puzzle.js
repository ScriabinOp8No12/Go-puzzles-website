"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Puzzles", {
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
        // we always need to specify the datatype within the array, use parenthesis
        type: Sequelize.INTEGER,
      },
      difficulty_rank: {
        // can be null initially if there's not enough user data
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      is_public: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    });
    // add index and unique property to ensure user can only add one puzzle per move!
    await queryInterface.addIndex("Puzzles", ["sgf_id", "move_number"], {
      unique: true,
      name: "unique_sgf_move_number",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex("Puzzles", "unique_sgf_move_number");
    await queryInterface.dropTable("Puzzles");
  },
};
