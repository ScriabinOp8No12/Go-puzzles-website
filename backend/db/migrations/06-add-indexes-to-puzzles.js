"use strict";

// this block below HAS to go in every migration and seeder that we create!
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('puzzles', ['move_number'], options);
    await queryInterface.addIndex('puzzles', ['difficulty'], options);
    await queryInterface.addIndex('puzzles', ['vote_count'], options);
    await queryInterface.addIndex('puzzles', ['board_size'], options);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('puzzles', ['move_number'], options);
    await queryInterface.removeIndex('puzzles', ['difficulty'], options);
    await queryInterface.removeIndex('puzzles', ['vote_count'], options);
    await queryInterface.removeIndex('puzzles', ['board_size'], options);
  }
};
