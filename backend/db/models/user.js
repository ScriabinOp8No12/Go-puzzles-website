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
      // oh yikers, the below foreignKey was referencing user_Id with a capital I
      User.hasMany(models.Sgf, { foreignKey: "user_id" });
      User.hasMany(models.PotentialPuzzle, {foreignKey: "user_id"})
      User.hasMany(models.UserQuizResult, {foreignKey: "user_id"})

    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // force username to be a combination of letters, numbers, and optionally spaces
          isAlphaNumbericWithSpaces(value) {
            if (
              // regex that allows only letters and numbers, it can have spaces too
              !Validator.matches(value, /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]*$/)
            ) {
              throw new Error(
                "Username must contain a combination of letters and numbers. White spaces are allowed too!"
              );
            }
          },
          len: [4, 30],
          isNotEmail(value) {
            // use Validator.isEmail (Validator package contains isEmail())
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
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
      // RANK OF USER, NOT PUZZLE
      rank: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1900,
        // using elo system for ranking user, must not be negative
        validate: {
          // user elo ranking constraints same as puzzles (treat puzzles as users effectively)
          min: 100,
          max: 5000,
        },
      },
      solved_puzzles: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
        // solved number of puzzles must be between 0 and 1 billion (can't be negative)
        validate: {
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
