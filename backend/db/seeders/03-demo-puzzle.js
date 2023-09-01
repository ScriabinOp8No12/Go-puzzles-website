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
          category: "Reading",
          move_number: 50,
          difficulty: 1500,
          description:
            "This is a reading / cutting stone problem found from Arthur's chaotic Fox game. There's one correct move!",
          completed: true,
          vote_count: 15,
          board_size: 19,
          is_user_puzzle: true,
          solution_coordinates: JSON.stringify(["N8"]),
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607522/puzzle6_7_20_23_thfwb8.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          category: "Reading",
          move_number: 205,
          difficulty: 1000,
          description: "This is a direction of play or reading puzzle!",
          completed: true,
          vote_count: 105,
          board_size: 19,
          is_user_puzzle: true,
          solution_coordinates: JSON.stringify(["M13", "L12"]),
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle5_7_20_23_ie39gw.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 3,
          category: "Ladder/Net or reading",
          move_number: 156,
          difficulty: 50,
          description: "Let him cook",
          completed: false,
          vote_count: 1,
          board_size: 19,
          is_user_puzzle: false,
          solution_coordinates: JSON.stringify(["M14"]),
          thumbnail: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle4_7_20_23_hlb0q1.png",
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
