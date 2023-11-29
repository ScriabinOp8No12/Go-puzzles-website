"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Puzzle extends Model {
    static associate(models) {
      Puzzle.belongsTo(models.Sgf, { foreignKey: "sgf_id", onDelete: "SET NULL"});
      // Many to many relationship between Puzzles and Users through the UserPuzzles join table!
      Puzzle.belongsToMany(models.User, {
        through: "UserPuzzles",
        foreignKey: "puzzle_id",
        otherKey: "user_id",
      });
      Puzzle.hasMany(models.PuzzleCategory, { foreignKey: 'puzzle_id'});
    }
  }
  Puzzle.init(
    {
      sgf_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      sgf_data: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          // don't let the sgf_data be more than 20,000 characters (each SGF is roughly between 500 and 5000 characters)
          len: [1, 20000],
          // does not take in an empty sgf either
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("SGF data cannot be empty.");
            }
          },
        },
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
      // this is elo difficulty rank of the PUZZLE, we ensure it's at least 100 elo, but there's no upper bound
      difficulty: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 100,
        },
      },
      times_solved: {
        // allowNull: false, THIS BUGS OUT, thinks not providing a column of times_solved is undefined or something, never sets it to the default value
        type: DataTypes.BIGINT,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      description: {
        type: DataTypes.TEXT,
        // maximum characters of description is 100
        validate: {
          len: [0, 100]
        },
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
      solution_coordinates: {
        allowNull: false,
        type: DataTypes.TEXT,
        get() {
          const val = this.getDataValue('solution_coordinates');
          if (!val) return null;

          try {
            return JSON.parse(val);
          } catch (err) {
            console.error("JSON parsing failed:", err);
            return null;
          }
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
      suspended: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    },
    {
      sequelize,
      modelName: "Puzzle",
    }
  );
  return Puzzle;
};
