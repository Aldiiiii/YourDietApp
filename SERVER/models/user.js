"use strict";
const { Model } = require("sequelize");
const bc = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History, { foreignKey: "userId" });
      User.hasMany(models.UserAchievement, { foreignKey: "idUser" });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Username is required" },
          notEmpty: { msg: "Username is required" },
        },
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Gender is required" },
          notEmpty: { msg: "Gender is required" },
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: { msg: "Email must be unique" },
        validate: {
          isEmail: { msg: "Wrong email format" },
          notNull: { msg: "Email is required" },
          notEmpty: { msg: "Email is required" },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Password is required" },
          notEmpty: { msg: "Password is required" },
          
        },
      },
      weight: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Weight is required" },
          notEmpty: { msg: "Weight is required" },
        },
      },
      height: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Height is required" },
          notEmpty: { msg: "Height is required" },
        },
      },
      dateBirth: {
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          isDate: { msg: "Date Birth must be Date format" },
          notNull: { msg: "Date Birth is required" },
          notEmpty: { msg: "Date Birth is required" },
        },
      },
      activityLevel: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Activity is required" },
          notEmpty: { msg: "Activity is required" },
        },
      },
      targetWeight: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Target Weight is required" },
          notEmpty: { msg: "Target Weight is required" },
        },
      },
      extra: { type: DataTypes.STRING },
      calorieLimit: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate(user, options) {
          user.password = bc.hashSync(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
