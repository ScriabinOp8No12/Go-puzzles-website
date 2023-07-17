"use strict";
const { Model, Validator } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // verify associations later once all the models and migrations are made
      User.belongsToMany(models.Puzzle, {
        through: "UserPuzzles",
        foreignKey: "user_id",
        otherKey: "puzzle_id",
      });
      User.hasMany(models.Sgf, { foreignKey: "user_Id" });
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
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
          isEmail: true,
          notEmpty: true,
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
      // RANK OF USER, NOT PUZZLE
      rank: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // using elo system for ranking user, must not be negative
        validate: {
          // user elo ranking constraints same as puzzles (treat puzzles as users effectively)
          min: 100,
          max: 3000,
        },
      },
      solved_puzzles: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // solved number of puzzles must be between 0 and 1 billion (can't be negative)
        validate: {
          notEmpty: true,
          min: 0,
          max: 1000000000,
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
