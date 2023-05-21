'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'MarvyWarvy',
        age: 93,
        maxTravelDist: 5,
        sober: true,
        canHost: true,
        DM: true,
        combatFocus: 4,
        strategyFocus: 3,
        roleplayFocus: 1,
        storyFocus: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'catcatmcgee',
        age: 4,
        maxTravelDist: 10,
        sober: false,
        canHost: true,
        DM: false,
        combatFocus: 2,
        strategyFocus: 5,
        roleplayFocus: 4,
        storyFocus: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'emmy-bishop',
        age: 12,
        maxTravelDist: 2,
        sober: false,
        canHost: false,
        DM: false,
        combatFocus: 5,
        strategyFocus: 1,
        roleplayFocus: 1,
        storyFocus: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
