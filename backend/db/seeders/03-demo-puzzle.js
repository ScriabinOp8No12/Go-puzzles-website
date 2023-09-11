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
          category: "Judgment",
          move_number: 92,
          difficulty: 1800,
          description:
            "This is a reading / judgment problem found in a chaotic Fox game, there's one correct move, and since our opponent can't ladder us, we can extend out!",
          completed: false,
          vote_count: 20,
          board_size: 19,
          is_user_puzzle: false,
          solution_coordinates: JSON.stringify({
            // Correct move is "N8" and the sequence is as follows (ran at 50 visits)
            N8: ["N8", "O8", "Q11", "L9", "M7", "K10", "K12"],
          }),
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607522/puzzle6_7_20_23_thfwb8.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 2,
          category: "Reading",
          move_number: 78,
          difficulty: 1700,
          description: "This is a direction of play or reading puzzle!",
          completed: true,
          vote_count: 83,
          board_size: 19,
          is_user_puzzle: true,
          solution_coordinates: JSON.stringify({
            // Two correct starting moves, has same 3 move sequence though
            M13: ["M13", "K15", "J14", "N13", "G4", "G3"],
            K12: ["K12", "J13", "M13", "K15", "J14", "K16", "N15", "N14"],
          }),
          thumbnail:
            "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693607521/puzzle5_7_20_23_ie39gw.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sgf_id: 3,
          category: "Ladder/Net",
          move_number: 77,
          difficulty: 1450,
          description:
            "Cut first then connect because the opponent can't ladder or net us, they get 2 weak groups!",
          completed: false,
          vote_count: 9,
          board_size: 19,
          is_user_puzzle: false,
          solution_coordinates: JSON.stringify({
            M14: ["M14", "N15", "L16", "L13", "N13", "M13"],
          }),
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
