"use strict";

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Sgfs";
    return queryInterface.changeColumn(options, "thumbnail", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn(options, "thumbnail", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },
};
