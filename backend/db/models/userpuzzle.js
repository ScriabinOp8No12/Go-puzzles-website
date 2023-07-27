"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPuzzle extends Model {
    static associate(models) {
      // good idea to define the associations even though this is a join table
      UserPuzzle.belongsTo(models.Puzzle, { foreignKey: "puzzle_id" });
      UserPuzzle.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  UserPuzzle.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      puzzle_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      move_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000,
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
      },
      completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
      },
      thumbnail: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "UserPuzzle",
    }
  );
  return UserPuzzle;
};
