"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    // put tableName here inside up function instead of outside
    options.tableName = "UserPuzzles";
    return queryInterface.bulkInsert(
      options,
      [
        {
          user_id: 1,
          puzzle_id: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          puzzle_id: 2,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          puzzle_id: 3,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "UserPuzzles";
    return queryInterface.bulkDelete(options, null, {});
  },
};
