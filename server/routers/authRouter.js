const router = require('express').Router();
const passport = require('passport');
const { User: Users } = require('../db/models');

// auth login
router.get('/login/success', (req, res) => {
  const { user } = req.body;
  // const user = req.user;
  // console.log(user);
  res.status(200).send(user); // render login page
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// cb route for google to redirect to
// grab code to exchange for profile info (passport.authenticate)
// before (req, res), cb function from passport-setup fires
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  Users.findByPk(req.user.id)
    .then((user) => {
      if (user.username === null) {
        // redirect to signup
        res.redirect('/profile');
      } else {
        res.redirect('/profile');
      }
    })
    .catch((err) => {
      console.error('Failed to FIND user BY ID:', err);
    });
  // res.send(req.user);
});

module.exports = router;
