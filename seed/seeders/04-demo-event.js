'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        date: new Date(),
        name: 'Fellowship of the Ring',
        description: 'I came here to suck eggs and chew bubble gum, and were all outta bubblegum.',
        address: '123 Fake St',
        hostId: 1,
        chatId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
