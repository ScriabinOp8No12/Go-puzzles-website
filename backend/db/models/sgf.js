// use built in smartgame library to add custom model validation to ensure uploaded file is an sgf!
const smartgame = require("smartgame");

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sgf extends Model {
    static associate(models) {
      Sgf.hasMany(models.Puzzle, { foreignKey: "sgf_id" });
      Sgf.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Sgf.init(
    // ****** removed sgf_mistake_move_numbers and game_preview from model and migration
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      sgf_data: {
        allowNull: false,
        // needs to be TEXT type because SGF data > 255 characters
        type: DataTypes.TEXT,
        validate: {
          // don't let the sgf_data be more than 1,000,000 characters (each SGF is roughly between 500 and 5000 characters)
          len: [1, 1000000],
          // does not take in an empty sgf either
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("SGF data cannot be empty.");
            }
          },
          // accept only valid .sgf files
          isSgf(value) {
            try {
              smartgame.parse(value);
            } catch (error) {
              throw new Error("Invalid file type. Only SGF files are allowed.");
            }
          },
        },
      },
      sgf_name: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "?",
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("SGF name cannot be empty.");
            }
          },
          // length of sgf_name is capped at 100 characters
          len: [1, 100],
        },
      },
      board_size: {
        // Allow board_size to be null initially because we will populate it later with our scripts
        type: DataTypes.INTEGER,
        validate: {
          isIn: {
            args: [[9, 13, 19]],
            msg: "Board size must be either 9, 13, or 19",
          },
        },
      },
      black_player: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "?",
        validate: {
          len: [0, 100],
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Black player name cannot be empty.");
            }
          },
        },
      },
      white_player: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "?",
        validate: {
          len: [0, 100],
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("White player name cannot be empty.");
            }
          },
        },
      },
      black_rank: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "?",
        validate: {
          len: [0, 10],
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Black rank cannot be empty.");
            }
          },
        },
      },
      white_rank: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "?",
        validate: {
          len: [0, 10],
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("White rank cannot be empty.");
            }
          },
        },
      },
      result: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "?",
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Result cannot be empty.");
            }
          },
          // length of 30 characters should cover all combinations of result strings
          len: [0, 30],
        },
      },
      thumbnail: {
        // Allow thumbnail to be null initially because we will populate it later with our scripts
        type: DataTypes.STRING,
        defaultValue: "www.no-thumbnail.jpg",
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Thumbnail cannot be empty.");
            }
          },
          isUrl: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Sgf",
    }
  );
  return Sgf;
};
