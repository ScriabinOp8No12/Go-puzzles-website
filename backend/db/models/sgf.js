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
          // don't let the sgf_data be more than 500,000 characters (each SGF is roughly between 500 and 5000 characters)
          len: [1, 500000],
          // does not take in an empty sgf either
          notEmpty: true,
          // accept only valid .sgf files
          isSgf(value) {
            try {
              smartgame.parse(value);
            } catch (error) {
              throw new Error("Invalid file type. Only sgf files are allowed.");
            }
          },
        },
      },
      sgf_name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          // does not take in an empty name
          notEmpty: true,
          // length of sgf_name is capped at 150 characters
          len: [1, 150],
        },
      },
      black_player: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 100],
        },
      },
      white_player: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 100],
        },
      },
      black_rank: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 10],
        },
      },
      white_rank: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 10],
        },
      },
      result: {
        type: DataTypes.STRING,
        validate: {
          // length of 30 characters should cover all combinations of result strings
          len: [0, 30],
        },
      },
      thumbnail: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Sgf",
    }
  );
  return Sgf;
};
