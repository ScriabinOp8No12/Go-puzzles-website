"use strict";

let options = { tableName: 'Puzzles' };

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex(options, ['move_number']);
    await queryInterface.addIndex(options, ['difficulty']);
    await queryInterface.addIndex(options, ['vote_count']);
    await queryInterface.addIndex(options, ['board_size']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex(options, ['move_number']);
    await queryInterface.removeIndex(options, ['difficulty']);
    await queryInterface.removeIndex(options, ['vote_count']);
    await queryInterface.removeIndex(options, ['board_size']);
  }
};
