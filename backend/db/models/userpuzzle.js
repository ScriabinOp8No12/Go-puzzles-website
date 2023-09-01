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
