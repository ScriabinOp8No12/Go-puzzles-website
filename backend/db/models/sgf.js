// use built in smartgame library to add custom model validation to ensure uploaded file is an sgf!
const smartgame = require("smartgame");

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sgf extends Model {
    static associate(models) {
      Sgf.hasMany(models.Puzzle, { foreignKey: "sgf_id", onDelete: 'SET NULL'  });
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
      game_date: {
        type: DataTypes.DATE,
        validate: {
          isDate: true
        }
      },
      sgf_name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 65],
          setToDefaultIfEmpty(value) {
            if (value.trim().length === 0) {
              this.setDataValue('sgf_name', '?'); // '?' is your default value
            }
          },
        },
      },
      board_size: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isIn: {
            args: [[9, 13, 19]],
            msg: "Board size must be either 9, 13, or 19",
          },
        },
      },
      black_player: {
        // allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [0, 30],
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Black player cannot be empty.");
            }
          }
        },
      },
      white_player: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 30],
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("White player cannot be empty.");
            }
          }
        },
      },
      black_rank: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 20],
        },
      },
      white_rank: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 20],
        },
      },
      // Allow all komi values for now, but then stop the user when they try to analyze the game with KataGo
      // Then it requires the komi to be within -50 to 50 so the analysis works well -> or check handicap, since 5 stones reverse 50 could technically work
      komi: {
        type: DataTypes.FLOAT,
      },
      result: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 20],
        },
      },
      thumbnail: {
        // Allow thumbnail to be null initially because we will populate it later with our scripts
        type: DataTypes.STRING,
        defaultValue: "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693682857/no_image_thumbnail_tpwuc0.jpg",
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
