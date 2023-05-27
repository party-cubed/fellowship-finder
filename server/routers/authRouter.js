const { Router } = require('express');
const passport = require('passport');
const { User: Users } = require('../db/models');

const Auth = Router();

// auth login
Auth.get('/login/success', (req, res) => {
  const { user } = req;
  res.status(200).send(user);
});

// auth logout
Auth.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google
Auth.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// cb route for google to redirect to
// grab code to exchange for profile info (passport.authenticate)
// before (req, res), cb function from passport-setup fires
Auth.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  const { user } = req;
  Users.findByPk(user.id)
    .then((userObj) => {
      if (userObj.username === null) {
        // redirect to signup
        res.redirect('/signup').send(userObj);
      } else {
        res.redirect(`/user/${user.id}`);
      }
    })
    .catch((err) => {
      console.error('Failed to FIND user BY ID:', err);
    });
});

module.exports = Auth;
