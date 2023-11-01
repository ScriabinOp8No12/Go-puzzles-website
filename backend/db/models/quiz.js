"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      // Define associations here
      Quiz.hasMany(models.UserQuizResult, { foreignKey: "quiz_id"});
    }
  }
  Quiz.init(
    {
      quiz_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      questions_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Quiz",
    }
  );
  return Quiz;
};
