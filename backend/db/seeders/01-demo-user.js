"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // put tableName here inside up function instead of outside
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          username: "bigfry",
          email: "test@gmail.com",
          rank: null,
          solved_puzzles: 5,
          // Verify BCRYPT setup LATER!
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          username: "bigfry1",
          email: "test1@gmail.com",
          hashedPassword: "test",
          rank: 1500,
          solved_puzzles: 500,
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          username: "bigfry2",
          email: "test2@gmail.com",
          hashedPassword: "test",
          rank: 2250,
          solved_puzzles: 10,
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = "Users";
    return queryInterface.bulkDelete(
      options,
      {
        // needed to rename the usernames below to match what we changed in seeder data!
        username: { [Op.in]: ["bigfry", "bigfry1", "bigfry2"] },
      },
      {}
    );
  },
};
