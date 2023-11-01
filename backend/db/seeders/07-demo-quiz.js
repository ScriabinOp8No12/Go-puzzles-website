"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Quizzes";
    return queryInterface.bulkInsert(
      options,
      [
        {
          id: 1,
          quiz_name: "Basic Rules",
          questions_count: 15,
        },
        {
          id: 2,
          quiz_name: "Rules & Strategy",
          questions_count: 12,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Quizzes";
    return queryInterface.bulkDelete(options, null, {});
  },
};
