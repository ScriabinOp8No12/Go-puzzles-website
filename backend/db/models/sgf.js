'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sgf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sgf.init({
    user_id: DataTypes.INTEGER,
    sgf_data: DataTypes.TEXT,
    sgf_name: DataTypes.STRING,
    mistake_move_numbers: DataTypes.INTEGER,
    game_preview: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sgf',
  });
  return Sgf;
};