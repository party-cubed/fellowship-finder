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
  googleId: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,

    // allowNull: false

  },
  email: {
    type: DataTypes.STRING,
    allowNull: true //set to allow true temporarily
  },
  password: {
    type: DataTypes.STRING,

    // allowNull: false

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


const Events = sequelize.define('Events', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  isOnline: {
    type: DataTypes.BOOLEAN
  },
  isInPerson: {
    type: DataTypes.BOOLEAN
  },
  street: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  state: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  zip: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  link: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  hostId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  selectedUsers: {
    type: DataTypes.STRING(1000),
    allowNull: true
  }
  // chatId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true
  // }
});

const Post = sequelize.define('post', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  post: {
    type: DataTypes.STRING(255)
  },
  upVotes: {
    type: DataTypes.INTEGER
  },
});

User.hasMany(Message, { foreignKey: 'userId' });
Message.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  User,
  Message,
  Events,
  Post,
};
