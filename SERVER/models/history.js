'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.hasMany(models.FoodEaten,{foreignKey:'historyId'})
      History.hasOne(models.Menu,{foreignKey:'historyId'})
      History.belongsTo(models.User,{foreignKey:'userId'})
      History.belongsToMany(models.Food, { through: models.FoodEaten, foreignKey: "historyId"})
    }
  }
  History.init({
    day: DataTypes.DATE,
    calorieLimit: DataTypes.INTEGER,
    calorieGain: DataTypes.INTEGER,
    isOver: DataTypes.BOOLEAN,
    menu: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};