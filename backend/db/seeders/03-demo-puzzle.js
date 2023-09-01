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
          sgf_id: 1,
          category: "Ladder/Net",
          move_number: 50,
          difficulty: 1500,
          description:
            "This is a ladder/net puzzle found from an 8kyu OGS game, there may be more than one solution!",
          completed: true,
          vote_count: 15,
          board_size: 19,
          thumbnail: "www.no-thumbnail.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          category: "Direction of Play",
          move_number: 205,
          difficulty: 1000,
          description: "This is a direction of play / judgement puzzle!",
          completed: false,
          vote_count: -105,
          board_size: 19,
          thumbnail: "www.no-thumbnail.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 3,
          category: "Life and Death",
          move_number: 156,
          difficulty: 50,
          description: "Let him cook",
          completed: true,
          vote_count: 1,
          board_size: 19,
          thumbnail: "www.no-thumbnail.jpg",
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
