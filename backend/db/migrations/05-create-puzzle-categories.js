"use strict";

let options = { tableName: 'PuzzleCategories'};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PuzzleCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      puzzle_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Puzzles',
          key: 'id'
        },
      },
      category_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      count: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    options
    );

    // Add indexes for optimization
    await queryInterface.addIndex(options, ['puzzle_id']);
    await queryInterface.addIndex(options, ['category_name']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PuzzleCategories', options);
  }
};
