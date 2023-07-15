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
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      sgf_data: {
        allowNull: false,
        type: DataTypes.STRING,
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
        },
      },
      mistake_move_numbers: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          isValidArray(value) {
            let array;
            try {
              array = JSON.parse(value);
            } catch (e) {
              throw new Error(
                "Mistake move numbers must be a valid JSON array"
              );
            }
            if (!Array.isArray(array)) {
              throw new Error("Mistake move numbers must be an array");
            }
            array.forEach((num) => {
              if (!Number.isInteger(num)) {
                throw new Error("Mistake move numbers must be integers");
              }
              if (num < 1 || num > 1000) {
                throw new Error(
                  "Mistake move numbers must be between 1 and 1000"
                );
              }
            });
          },
        },
      },

      game_preview: {
        type: DataTypes.STRING,
        // does not take in an empty url either
        validate: {
          notEmpty: true,
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
