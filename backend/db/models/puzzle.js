'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puzzle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Puzzle.init({
    sgf_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    move_number: DataTypes.INTEGER,
    difficulty_rank: DataTypes.INTEGER,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    is_public: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Puzzle',
  });
  return Puzzle;
};