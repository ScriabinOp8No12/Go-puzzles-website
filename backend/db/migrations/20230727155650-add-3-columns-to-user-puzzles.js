"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      (options.tableName = "UserPuzzles"),
      queryInterface.addColumn(options, "move_number", {
        type: Sequelize.INTEGER,
        allowNull: false,
      }),
      queryInterface.addColumn(options, "completed", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }),
      queryInterface.addColumn(options, "thumbnail", {
        type: Sequelize.TEXT,
        allowNull: false,
      }),
    ]);
    // Add a unique constraint to the combination of user_id and puzzle_id columns, if the user adds the same puzzle, it won't let them do it
    return queryInterface.addConstraint(options, {
      fields: ["user_id", "puzzle_id"],
      type: "unique",
      name: "unique_user_puzzle",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(options, "unique_user_puzzle");
    return Promise.all([
      queryInterface.removeColumn(options, "move_number"),
      queryInterface.removeColumn(options, "completed"),
      queryInterface.removeColumn(options, "thumbnail"),
    ]);
  },
};
