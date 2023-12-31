'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.hasMany(models.FoodEaten,{foreignKey:'foodId'})
      Food.belongsToMany(models.History, {through: models.FoodEaten, foreignKey: "foodId"})
    }
  }
  Food.init({
    name: DataTypes.STRING,
    calorie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};