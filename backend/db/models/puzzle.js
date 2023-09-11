"use strict";
const { Model, Sequelize } = require("sequelize");
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
      Puzzle.hasMany(models.PuzzleCategory, { foreignKey: 'puzzle_id' });
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
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
      },
      move_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000,
        },
      },
      // this is elo difficulty rank of the PUZZLE, NOT the strength of the user
      difficulty: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 100,
          // capping elo at 5,000
          max: 5000,
        },
      },
      times_solved: {
        allowNull: false,
        type: DataTypes.BIGINT,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      description: {
        type: DataTypes.TEXT,
        // maximum characters of description is 1000
        validate: {
          len: [0, 1000],
          // **** Change later?
          notJustWhitespace(value) {
            if (value.trim().length === 0 && value.length !== 0) {
              throw new Error("Cannot consist solely of whitespace.");
            }
          },
        },
      },
      completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vote_count: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0, // default to 0 initially
        validate: {
          // Vote count must be between negative a million and a million
          min: -1000000,
          max: 1000000,
          isInt: {
            msg: "Vote count must be an integer."
          },
        }
      },
      board_size: {
        type: DataTypes.INTEGER,
        validate: {
          isIn: {
            args: [[9, 13, 19]],
            msg: "Board size must be either 9, 13, or 19"
          }
        }
      },
      is_user_puzzle: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      solution_coordinates: {
        allowNull: false,
        type: DataTypes.TEXT,
        get() {
          return JSON.parse(this.getDataValue('solution_coordinates'));
        },
        set(val) {
          this.setDataValue('solution_coordinates', JSON.stringify(val));
        },
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
      },
      thumbnail: {
        type: DataTypes.STRING,
        defaultValue: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693682857/no_image_thumbnail_tpwuc0.jpg",
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
          isUrl: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Puzzle",
    }
  );
  return Puzzle;
};
