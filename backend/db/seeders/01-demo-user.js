"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          username: "Shin Jinseo",
          email: "test@gmail.com",
          rank: 3873,
          solved_puzzles: 5050,
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          username: "bigfry1",
          email: "test1@gmail.com",
          rank: 1500,
          solved_puzzles: 500,
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          username: "test user",
          email: "test2@gmail.com",
          rank: 250,
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
        username: { [Op.in]: ["Shin Jinseo", "bigfry1", "bigfry2"] },
      },
      {}
    );
  },
};
