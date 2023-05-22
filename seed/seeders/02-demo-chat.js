'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chats', [
      {
        groupId: 1,
        eventId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        groupId: null,
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        groupId: null,
        eventId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        groupId: null,
        eventId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chats', null, {});
  }
};
