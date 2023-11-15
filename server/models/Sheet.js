const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Chats', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    charRace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    charClass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charDesc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Sheets',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
