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
      category: {
        allowNull: true,
        type: DataTypes.STRING,
        validate: {
          notEmptyString(value) {
            if (value.length === 0 || value.trim().length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
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
        allowNull: false,
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
