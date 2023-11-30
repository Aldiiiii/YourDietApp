'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAchievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAchievement.belongsTo(models.Achievement,{foreignKey:'idAchievement'})
      UserAchievement.belongsTo(models.User,{foreignKey:'idUser'})
    }
  }
  UserAchievement.init({
    idUser: DataTypes.INTEGER,
    idAchievement: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserAchievement',
  });
  return UserAchievement;
};