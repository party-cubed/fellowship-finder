const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fellowship', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
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

const db = {
  sequelize,
  Sequelize,
};

module.exports = {
  sequelize
};


// const mysql = require('mysql2');

// const db = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'fellowship'
// });

// module.exports = db;
