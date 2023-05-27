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

User.patch('/add-friend/:id', async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const user = await Users.findOne({ where: { googleId: id } }); // will be current user ID

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let updatedFriends;
    if (user.friends) {
      updatedFriends = `${user.friends};${username}`;
    } else {
      updatedFriends = username;
    }

    await user.update({ friends: updatedFriends });
    return res.status(200).json({ message: 'Friend added!' });
  } catch (error) {
    console.error('Failed to PATCH user BY ID:', error);
    return res.status(500).json({ error: 'An error occurred while updating user' });
  }
});

User.patch('/unfriend/:id/', async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const user = await Users.findOne({ where: { googleId: id } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let updatedFriends;
    if (user.friends) {
      const friendsArr = user.friends.split(';');
      const updatedFriendsArr = friendsArr.filter((friend) => friend !== username);
      updatedFriends = updatedFriendsArr.join(';');
    } else {
      return res.status(404).json({ error: 'Friend not found' });
    }

    await user.update({ friends: updatedFriends });
    return res.status(200).json({ message: 'Friend removed!' });
  } catch (error) {
    console.error('Failed to PATCH user BY ID:', error);
    return res.status(500).json({ error: 'An error occurred while updating user' });
  }
});

module.exports = User;
