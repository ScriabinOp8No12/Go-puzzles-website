"use strict";

// this block below HAS to go in every migration and seeder that we create!
let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('Puzzles', ['move_number'], options);
    await queryInterface.addIndex('Puzzles', ['difficulty'], options);
    await queryInterface.addIndex('Puzzles', ['vote_count'], options);
    await queryInterface.addIndex('Puzzles', ['board_size'], options);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('Puzzles', ['move_number'], options);
    await queryInterface.removeIndex('Puzzles', ['difficulty'], options);
    await queryInterface.removeIndex('Puzzles', ['vote_count'], options);
    await queryInterface.removeIndex('Puzzles', ['board_size'], options);
  }
};
