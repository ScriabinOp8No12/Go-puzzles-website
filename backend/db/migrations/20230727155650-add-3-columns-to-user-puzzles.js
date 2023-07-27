"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn(
        "UserPuzzles",
        "move_number",
        { type: Sequelize.INTEGER, allowNull: false },
        options
      ),
      queryInterface.addColumn(
        "UserPuzzles",
        "completed",
        { type: Sequelize.BOOLEAN, allowNull: false },
        options
      ),
      queryInterface.addColumn(
        "UserPuzzles",
        "thumbnail",
        { type: Sequelize.TEXT, allowNull: false },
        options
      ),
    ]);
    // Add a unique constraint to the combination of user_id and puzzle_id column, if the user adds the same puzzle, it won't let them do it
    return queryInterface.addConstraint(
      "UserPuzzles",
      {
        fields: ["user_id", "puzzle_id"],
        type: "unique",
        name: "unique_user_puzzle",
      },
      options
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "UserPuzzles",
      "unique_user_puzzle",
      options
    );
    return Promise.all([
      queryInterface.removeColumn("UserPuzzles", "move_number", options),
      queryInterface.removeColumn("UserPuzzles", "completed", options),
      queryInterface.removeColumn("UserPuzzles", "thumbnail", options),
    ]);
  },
};
