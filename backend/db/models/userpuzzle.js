"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPuzzle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
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
    },
    {
      sequelize,
      modelName: "UserPuzzle",
    }
  );
  return UserPuzzle;
};
