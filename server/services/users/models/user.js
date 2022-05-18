"use strict";
const { Model } = require("sequelize");
const { createHashPass } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserHouse);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "username is require" },
          notNull: { msg: "username is require" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Email is require" },
          notNull: { msg: "Email cant empty" },
          isEmail: { msg: "Must be format email" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password is require" },
          notNull: { msg: "Password cant empty" },
          isPassword(value) {
            let pass = value.length;
            if (pass < 6) {
              throw new Error("Minimal input password 6");
            }
          },
        },
      },
      phoneNumber: DataTypes.STRING,
      profilePict: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  //hooks
  User.beforeCreate((instance, options) => {
    instance.password = createHashPass(instance.password);
  });
  return User;
};
