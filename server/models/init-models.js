/* eslint-disable no-underscore-dangle */
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/index');
const _Chats = require('./Chats');
const _Events = require('./Events');
const _Groups = require('./Groups');
const _Messages = require('./Messages');
const _SequelizeMeta = require('./SequelizeMeta');
const _UserChats = require('./UserChats');
const _UserEvents = require('./UserEvents');
const _UserGroups = require('./UserGroups');
const _Users = require('./Users');


const Chats = _Chats(sequelize, DataTypes);
const Events = _Events(sequelize, DataTypes);
const Groups = _Groups(sequelize, DataTypes);
const Messages = _Messages(sequelize, DataTypes);
const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
const UserChats = _UserChats(sequelize, DataTypes);
const UserEvents = _UserEvents(sequelize, DataTypes);
const UserGroups = _UserGroups(sequelize, DataTypes);
const Users = _Users(sequelize, DataTypes);

UserChats.belongsTo(Chats, { as: 'chat', foreignKey: 'chatId' });
Chats.hasMany(UserChats, { as: 'userchats', foreignKey: 'chatId' });
UserEvents.belongsTo(Events, { as: 'event', foreignKey: 'eventId' });
Events.hasMany(UserEvents, { as: 'userevents', foreignKey: 'eventId' });
UserGroups.belongsTo(Groups, { as: 'group', foreignKey: 'groupId' });
Groups.hasMany(UserGroups, { as: 'usergroups', foreignKey: 'groupId' });
UserChats.belongsTo(Users, { as: 'user', foreignKey: 'userId' });
Users.hasMany(UserChats, { as: 'userchats', foreignKey: 'userId' });
UserEvents.belongsTo(Users, { as: 'user', foreignKey: 'userId' });
Users.hasMany(UserEvents, { as: 'userevents', foreignKey: 'userId' });
UserGroups.belongsTo(Users, { as: 'user', foreignKey: 'userId' });
Users.hasMany(UserGroups, { as: 'usergroups', foreignKey: 'userId' });


module.exports = {
  Users,
  Chats,
  Events,
  Groups,
  Messages,
  UserChats,
  UserEvents,
  UserGroups,
};
