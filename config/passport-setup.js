const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const { User: Users } = require('../server/db/models');

passport.use(
  new GoogleStrategy({
  // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    // passport cb function
  }, (accessToken, refreshToken, profile, done) => {
    // accessToken gives access to user info
    // refreshToken refreshes accessToken
    // profile is user info
    // done is a func to call when done w/ cb
    const { id, emails } = profile;

    // check if user already exists
    Users.findOne({ where: { googleId: id } })
      .then((currentUser) => {
        if (currentUser) {
          console.log('user is:', currentUser);
        } else {
          Users.create({
            googleId: id,
            email: emails[0].value
          })
            .then((newUser) => {
              console.log('new user created:', newUser);
            })
            .catch((err) => {
              console.error('Failed to CREATE new user:', err);
            });
        }
      })
      .catch((err) => {
        console.error('Failed to FIND user by googleId:', err);
      });
  })
);


