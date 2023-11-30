'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Achievement.hasMany(models.UserAchievement,{foreignKey:'idAchievement'})
    }
  }
  Achievement.init({
    date: DataTypes.DATE,
    weightBefore: DataTypes.INTEGER,
    currentWeight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Achievement',
  });
  return Achievement;
};