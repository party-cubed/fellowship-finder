'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Messages', [
      {
        text: 'Hello, this is the first message',
        userId: 1,
        chatId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Hello, this is the second message',
        userId: 2,
        chatId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'First message for this event',
        userId: 1,
        chatId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Message between user 1 and 3',
        userId: 1,
        chatId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Another message between user 1 and 3',
        userId: 1,
        chatId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Hello other user',
        userId: 1,
        chatId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
