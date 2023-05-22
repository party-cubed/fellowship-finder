const { Router } = require('express');
const userModel = require('../models/Users.js');
console.log(userModel.findByPk(1));
const User = Router();

User.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByPk(id);

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
