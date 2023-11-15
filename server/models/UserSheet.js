/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
// eslint-disable-next-line import/newline-after-import
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserChats', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    sheetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Sheets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'UserSheets',
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
      {
        name: "userId",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "sheetId",
        using: "BTREE",
        fields: [
          { name: "sheetId" },
        ]
      },
    ]
  });
};
