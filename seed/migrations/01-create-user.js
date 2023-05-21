'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      maxTravelDist: {
        type: Sequelize.INTEGER
      },
      sober: {
        type: Sequelize.BOOLEAN
      },
      canHost: {
        type: Sequelize.BOOLEAN
      },
      DM: {
        type: Sequelize.BOOLEAN
      },
      combatFocus: {
        type: Sequelize.INTEGER
      },
      strategyFocus: {
        type: Sequelize.INTEGER
      },
      roleplayFocus: {
        type: Sequelize.INTEGER
      },
      storyFocus: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
