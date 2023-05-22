const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxTravelDist: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sober: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    canHost: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DM: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    combatFocus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    strategyFocus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roleplayFocus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storyFocus: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users',
    timestamps: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ]
      },
    ]
  });
};
