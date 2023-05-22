const { Router } = require('express');
const { Users } = require('../models/init-models.js');

const User = Router();

User.get('/', async (req, res) => {
  const { id } = req.params;
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
  console.log('id', id);
  try {
    console.log(Users.findByPk);
    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(user);
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while retrieving user' });
  }
});

module.exports = User;
