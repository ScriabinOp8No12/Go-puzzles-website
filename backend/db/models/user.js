"use strict";
const { Model, Validator } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            // use Validator.isEmail (Validator package contains isEmail())
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
          // empty string model validation
          notEmptyString(value) {
            if (value.length === 0) {
              throw new Error("Cannot be empty.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true,
        },
      },
      hashedPassword: {
        allowNull: false,
        // use .binary here
        type: DataTypes.STRING.BINARY,
        validate: {
          len: [60, 60],
        },
      },
      rank: {
        type: DataTypes.INTEGER,
        // using my own elo system for ranking puzzles, must not be negative, and maximum of 100,000 elo
        validate: {
          min: 0,
          // realistically, something like a maximum of 5,000 elo should be plenty
          max: 100000,
        },
      },
      solved_puzzles: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // solved number of puzzles must be between 0 and 1 trillion (can't be negative)
        validate: {
          min: 0,
          max: 1000000000000,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
    }
  );
  return User;
};
