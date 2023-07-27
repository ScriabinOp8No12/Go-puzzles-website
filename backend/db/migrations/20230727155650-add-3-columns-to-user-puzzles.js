"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn(
        "Userpuzzles",
        "move_number",
        { type: Sequelize.INTEGER, allowNull: false },
        options
      ),
      queryInterface.addColumn(
        "Userpuzzles",
        "completed",
        { type: Sequelize.BOOLEAN, allowNull: false },
        options
      ),
      queryInterface.addColumn(
        "Userpuzzles",
        "thumbnail",
        { type: Sequelize.TEXT, allowNull: false },
        options
      ),
    ]);
    // Add a unique constraint to the combination of user_id and puzzle_id column, if the user adds the same puzzle, it won't let them do it
    return queryInterface.addConstraint(
      "Userpuzzles",
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
      "Userpuzzles",
      "unique_user_puzzle",
      options
    );
    return Promise.all([
      queryInterface.removeColumn("Userpuzzles", "move_number", options),
      queryInterface.removeColumn("Userpuzzles", "completed", options),
      queryInterface.removeColumn("Userpuzzles", "thumbnail", options),
    ]);
  },
};
