const express = require('express');
const path = require('path');
const User = require('./routers/userRouter');
const { sequelize } = require('./db/index');

// initilize App
const app = express();

// connect App to client
const clientPath = path.resolve(__dirname, '../dist');
app.use(express.static(clientPath));

// configure App
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
});

//ROUTERS
app.use('/api/user', User);

module.exports = app;
