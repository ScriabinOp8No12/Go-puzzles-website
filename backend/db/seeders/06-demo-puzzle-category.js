"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

// In a new seeder file for PuzzleCategories
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "PuzzleCategories";
    return queryInterface.bulkInsert(options,
      [
      { puzzle_id: 1, category_name: 'Reading', count: 15 },
      { puzzle_id: 1, category_name: 'Judgment', count: 10 },
      { puzzle_id: 1, category_name: 'Direction', count: 5 },
      { puzzle_id: 1, category_name: 'Life and Death', count: 2 },
      { puzzle_id: 1, category_name: 'Capturing Race', count: 4 },
      { puzzle_id: 1, category_name: 'Ladder/Net', count: 4 },
      { puzzle_id: 1, category_name: 'Other', count: 0 },
    ],
    {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    options.tableName = "PuzzleCategories"
    return queryInterface.bulkDelete(options, null, {});
  }
};
