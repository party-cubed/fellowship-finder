const { Router } = require('express');
// const { Users } = require('../models/init-models.js');
const { User: Users } = require('../db/models.js');

const User = Router();

User.get('/all', async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving users' });
  }
});

User.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving user' });
  }
});

module.exports = User;
