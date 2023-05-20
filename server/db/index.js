const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fellowship', 'root', '', {
  dialect: 'mysql'
});

async function initialize() {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log('Connected to database!');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
}

initialize();

module.exports = {
  sequelize
};
