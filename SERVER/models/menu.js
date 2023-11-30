'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.History,{foreignKey:'historyId'})
    }
  }
  Menu.init({
    historyId: DataTypes.INTEGER,
    breakfast: DataTypes.STRING,
    breakfastCalorie: DataTypes.INTEGER,
    breakfastEaten: DataTypes.BOOLEAN,
    lunch: DataTypes.STRING,
    lunchCalorie: DataTypes.INTEGER,
    lunchEaten: DataTypes.BOOLEAN,
    dinner: DataTypes.STRING,
    dinnerCalorie: DataTypes.INTEGER,
    dinnerEaten: DataTypes.BOOLEAN,
    snack: DataTypes.STRING,
    snackCalorie: DataTypes.INTEGER,
    snackEaten: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};