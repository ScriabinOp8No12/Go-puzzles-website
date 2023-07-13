'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPuzzle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPuzzle.init({
    user_id: DataTypes.INTEGER,
    puzzle_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserPuzzle',
  });
  return UserPuzzle;
};