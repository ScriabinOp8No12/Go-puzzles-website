"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Puzzle extends Model {
    static associate(models) {
      Puzzle.belongsTo(models.Sgf, { foreignKey: "sgf_id" });
      // Many to many relationship between Puzzles and Users through the UserPuzzles join table!
      Puzzle.belongsToMany(models.User, {
        through: "UserPuzzles",
        foreignKey: "puzzle_id",
        otherKey: "user_id",
      });
    }
  }
  Puzzle.init(
    {
      sgf_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          // max length of category name is 100 characters, should be plenty
          len: [2, 100],
        },
      },
      move_number: {
        allowNull: false,
        // integer for Puzzles table, but array for SGFs table
        type: DataTypes.INTEGER,
        // move number can't be less than 1, or over 1000 (games don't last 1000 moves ever)
        // don't allow decimal values for the move numbers!
        validate: {
          // don't use array here, array of move numbers if for the SGF! (this is just the puzzle)
          isInt: true,
          min: 1,
          max: 1000,
        },
      },
      // this is elo difficulty rank of the PUZZLE, NOT the strength of the user
      difficulty_rank: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          // capping elo at 100,000 -> realistically 5,000 max should be plenty
          max: 100000,
        },
      },
      description: {
        type: DataTypes.STRING,
        // maximum characters of description is 1000
        validate: {
          len: [0, 1000],
        },
      },
      completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      is_public: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Puzzle",
    }
  );
  return Puzzle;
};
