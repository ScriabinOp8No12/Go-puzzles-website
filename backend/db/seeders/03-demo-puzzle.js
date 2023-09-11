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
      // ***** Solution_coordinates notes!
      // solution_coordinates: JSON.stringify({
      //   // Correct move is "N8" and the sequence is as follows
      //   "N8": ["N8", "O8", "Q11", "L9", "M7", "K10", "K12"],
      //   // Add more key-value pairs here
      //   // If we want more than just one sequence off the initial right move
      //   // "N8": [
      //   //   ["N8", "O8", "Q11", "L9", "M7", "K10", "K12"],
      //   //   ["N8", "O9", "Q12", "L10", "M8"]
      //   // ],
      // }),
      [
        {
          sgf_id: 1,
          category: JSON.stringify({
            "Reading": 10,
            "Judgment": 8,
            "Direction": 3,
            "Life and Death": 2,
            "Capturing Race": 4,
            "Ladder/Net": 2,
            "Other": 0
          }),
          move_number: 92,
          difficulty: 1800,
          description:
            "This is a reading / cutting stone problem found from Arthur's chaotic Fox game. There's one correct move!",
          completed: false,
          vote_count: 15,
          board_size: 19,
          is_user_puzzle: false,
          solution_coordinates: JSON.stringify({
              // Correct move is "N8" and the sequence is as follows
              "N8": ["N8", "O8", "Q11", "L9", "M7", "K10", "K12"],
            }),
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607522/puzzle6_7_20_23_thfwb8.png",
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
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle5_7_20_23_ie39gw.png",
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
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle4_7_20_23_hlb0q1.png",
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
