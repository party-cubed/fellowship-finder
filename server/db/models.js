const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const numericRangeValidator = (min, max) => ({
  isNumeric: {
    msg: 'Field must be a number'
  },
  min: {
    args: [min],
    msg: `Field must be greater than or equal to ${min}`
  },
  max: {
    args: [max],
    msg: `Field must be less than or equal to ${max}`
  }
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true //set to allow true temporarily
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true //set to allow true temporarily
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true //set to allow true temporarily
  },
  age: {
    type: DataTypes.INTEGER
  },
  maxTravelDist: {
    type: DataTypes.INTEGER
  },
  sober: {
    type: DataTypes.BOOLEAN
  },
  canHost: {
    type: DataTypes.BOOLEAN
  },
  DM: {
    type: DataTypes.STRING
  },
  combatHeaviness: {
    type: DataTypes.INTEGER,
    validate: numericRangeValidator(1, 5)
  },
  strategyHeaviness: {
    type: DataTypes.INTEGER,
    validate: numericRangeValidator(1, 5)
  },
  roleplayFocus: {
    type: DataTypes.INTEGER,
    validate: numericRangeValidator(1, 5)
  },
  storyFocus: {
    type: DataTypes.INTEGER,
    validate: numericRangeValidator(1, 5)
  },
  friends: {
    // this was originally an array of friends' usernames
    // but mySQL (without postGRES) doesn't support storing data in an array that way
    // so for now we could store usernames as a string and separate each one w/ a certain character
    // ex. a semicolon, like so:
    // 'friend1;friend2;friend3'
    type: DataTypes.STRING
  }
});

const Message = sequelize.define('message', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  message: {
    type: DataTypes.STRING
  }
});

User.hasMany(Message, { foreignKey: 'userId' });
Message.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  User,
  Message
};
