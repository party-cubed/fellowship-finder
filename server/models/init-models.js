var DataTypes = require("sequelize").DataTypes;
var _Chats = require("./Chats");
var _Events = require("./Events");
var _Groups = require("./Groups");
var _Messages = require("./Messages");
var _SequelizeMeta = require("./SequelizeMeta");
var _UserChats = require("./UserChats");
var _UserEvents = require("./UserEvents");
var _UserGroups = require("./UserGroups");
var _Users = require("./Users");

function initModels(sequelize) {
  var Chats = _Chats(sequelize, DataTypes);
  var Events = _Events(sequelize, DataTypes);
  var Groups = _Groups(sequelize, DataTypes);
  var Messages = _Messages(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var UserChats = _UserChats(sequelize, DataTypes);
  var UserEvents = _UserEvents(sequelize, DataTypes);
  var UserGroups = _UserGroups(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  UserChats.belongsTo(Chats, { as: "chat", foreignKey: "chatId"});
  Chats.hasMany(UserChats, { as: "userchats", foreignKey: "chatId"});
  UserEvents.belongsTo(Events, { as: "event", foreignKey: "eventId"});
  Events.hasMany(UserEvents, { as: "userevents", foreignKey: "eventId"});
  UserGroups.belongsTo(Groups, { as: "group", foreignKey: "groupId"});
  Groups.hasMany(UserGroups, { as: "usergroups", foreignKey: "groupId"});
  UserChats.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(UserChats, { as: "userchats", foreignKey: "userId"});
  UserEvents.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(UserEvents, { as: "userevents", foreignKey: "userId"});
  UserGroups.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(UserGroups, { as: "usergroups", foreignKey: "userId"});

  return {
    Chats,
    Events,
    Groups,
    Messages,
    SequelizeMeta,
    UserChats,
    UserEvents,
    UserGroups,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
