'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.User, { through: 'UserEvents' });
      Event.belongsTo(models.User, { as: 'Host', foreignKey: 'hostId' });
      Event.belongsTo(models.User, { as: 'Owner', foreignKey: 'ownerId' });
      Event.belongsTo(models.User, { as: 'Dm', foreignKey: 'dmId' });
      Event.hasOne(models.Chat);
    }
  }
  Event.init({
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    hostId: DataTypes.STRING,
    chatId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
