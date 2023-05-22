'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Chat, { through: 'UserChats' });
      User.belongsToMany(models.Event, { through: 'UserEvents' });
      User.belongsToMany(models.Group, { through: 'UserGroups' });
      User.belongsToMany(models.User, { as: 'Friends', through: 'UserFriends' });
      User.hasMany(models.Message);
    }
  }
  User.init({
    username: DataTypes.STRING,
    age: DataTypes.INTEGER,
    maxTravelDist: DataTypes.INTEGER,
    sober: DataTypes.BOOLEAN,
    canHost: DataTypes.BOOLEAN,
    DM: DataTypes.BOOLEAN,
    combatFocus: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 }
    },
    strategyFocus: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 }
    },
    roleplayFocus: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 }
    },
    storyFocus: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
