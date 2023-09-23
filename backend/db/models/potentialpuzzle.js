"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PotentialPuzzle extends Model {
    static associate(models) {
      PotentialPuzzle.belongsTo(models.Sgf, { foreignKey: "sgf_id" });
    }
  }
  PotentialPuzzle.init(
    {
      sgf_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      sgf_data: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      category: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      move_number: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000,
        },
      },
      solution_coordinates: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      difficulty: {
        allowNull: true,
        type: DataTypes.INTEGER,

        defaultValue: 1500,
      },
      job_id: {
        // Change allow null to be false later!
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: true,
        type: DataTypes.ENUM("queued", "processing", "completed", "failed"),

        defaultValue: "queued",
      },
    },
    {
      sequelize,
      modelName: "PotentialPuzzle",
    }
  );
  return PotentialPuzzle;
};
