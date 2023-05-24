const { User } = require('./models');

async function addTestUsers() {
  try {
    const users = [
      {
        username: 'user1',
        age: 25,
        maxTravelDist: 10,
        sober: true,
        canHost: false,
        DM: 'yes',
        combatHeaviness: 3,
        strategyHeaviness: 4,
        roleplayFocus: 2,
        storyFocus: 5,
        friends: 'user2;user3'
      },
      {
        username: 'user2',
        age: 16,
        maxTravelDist: 42,
        sober: false,
        canHost: true,
        DM: 'no',
        combatHeaviness: 5,
        strategyHeaviness: 3,
        roleplayFocus: 1,
        storyFocus: 4,
        friends: 'user1'
      },
      {
        username: 'user3',
        age: 67,
        maxTravelDist: 3,
        sober: true,
        canHost: true,
        DM: 'maybe',
        combatHeaviness: 2,
        strategyHeaviness: 5,
        roleplayFocus: 3,
        storyFocus: 1,
        friends: 'user1'
      }
    ];

    await User.bulkCreate(users);

    console.log('Users seeded successfully!');
  } catch (err) {
    console.error('Error seeding users:', err);
  } finally {
    await User.sequelize.close();
  }
}


addTestUsers();
