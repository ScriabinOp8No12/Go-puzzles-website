"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserQuizResult extends Model {
    static associate(models) {
      // Define associations here
      UserQuizResult.belongsTo(models.User, { foreignKey: "user_id"});
      UserQuizResult.belongsTo(models.Quiz, { foreignKey: "quiz_id"});
    }
  }
  UserQuizResult.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quiz_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserQuizResult",
    }
  );
  return UserQuizResult;
};
