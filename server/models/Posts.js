const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Posts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    post: {
      type: DataTypes.STRING(255)
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    upVotes: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    tableName: 'Posts',
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
