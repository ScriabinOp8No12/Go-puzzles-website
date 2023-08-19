"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // put tableName here inside up function instead of outside
    options.tableName = "Puzzles";
    return queryInterface.bulkInsert(
      options,
      [
        {
          // we don't actually want an array, we just need one move number per associated puzzle
          // we want an array of moves in the SGF!
          sgf_id: 1,
          category: "Ladder/Net",
          move_number: 50,
          difficulty_rank: 1500,
          description:
            "This is a ladder/net puzzle found from an 8kyu OGS game, there may be more than one solution!",
          completed: true,
          is_user_puzzle: true,
          thumbnail: "base64 encoded string of image!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          category: "Direction of Play",
          move_number: 205,
          difficulty_rank: 1000,
          description: "This is a direction of play / judgement puzzle!",
          completed: false,
          is_user_puzzle: true,
          thumbnail: "base64 encoded string of image!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 3,
          category: "Life and Death",
          move_number: 156,
          difficulty_rank: 50,
          description: "Let him cook",
          completed: true,
          is_user_puzzle: true,
          thumbnail: "base64 encoded string of image!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Puzzles";
    return queryInterface.bulkDelete(options, null, {});
  },
};
