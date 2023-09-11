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
      completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "UserPuzzle",
    }
  );
  return UserPuzzle;
};
