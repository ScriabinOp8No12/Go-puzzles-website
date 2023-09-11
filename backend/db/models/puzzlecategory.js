"use strict";
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PuzzleCategory extends Model {
    static associate(models) {
      PuzzleCategory.belongsTo(models.Puzzle, { foreignKey: 'puzzle_id' });
    }
  }
  PuzzleCategory.init({
    puzzle_id: {
      allowNull: false,
      type: DataTypes.INTEGER,

    },
    category_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    count: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'PuzzleCategory',
  });

  return PuzzleCategory;
};
