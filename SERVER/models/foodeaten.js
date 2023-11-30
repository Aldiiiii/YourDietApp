'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodEaten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    FoodEaten.belongsTo(models.History,{foreignKey:'historyId'})
    FoodEaten.belongsTo(models.Food,{foreignKey:'foodId'})
    }
  }
  FoodEaten.init({
    historyId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FoodEaten',
  });
  return FoodEaten;
};