"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PotentialPuzzle extends Model {
    static associate(models) {
      PotentialPuzzle.belongsTo(models.Sgf, { foreignKey: "sgf_id", onDelete: 'SET NULL' });
    }
  }
  PotentialPuzzle.init(
    {
      sgf_id: {
        // allowNull: false,
        allowNull: true,
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
      // job_id: {
      //   // Change allow null to be false later!
      //   allowNull: true,
      //   type: DataTypes.INTEGER,
      // },
      // status: {
      //   allowNull: true,
      //   type: DataTypes.ENUM("queued", "processing", "completed", "failed"),

      //   defaultValue: "queued",
      // },
    },
    {
      sequelize,
      modelName: "PotentialPuzzle",
    }
  );
  return PotentialPuzzle;
};
