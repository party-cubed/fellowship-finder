const { Router } = require('express');

const Profile = Router();

const authCheck = (req, res, next) => {
  const { user } = req;
  // check if user NOT logged in
  if (!user) {
    res.redirect('/auth/login');
  } else {
    // move to next function
    next();
  }
};

// fire authCheck to check if user logged in before displaying profile
Profile.get('/', authCheck, (req, res) => {
  const { user } = req;
  // need to edit to display current user's profile
  res.send(`You are logged in, this is your profile: ${user.email}`);
});

module.exports = Profile;


