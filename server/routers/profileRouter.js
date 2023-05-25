const router = require('express').Router();

const authCheck = (req, res, next) => {
  // check if user NOT logged in
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    // move to next function
    next();
  }
};

// fire authCheck to check if user logged in before displaying profile
router.get('/', authCheck, (req, res) => {
  res.send(`You are logged in, this is your profile: ${req.user.email}`);
});

module.exports = router;


