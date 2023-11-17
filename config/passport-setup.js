const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const { User: Users } = require('../server/db/models');

// // create cookie using user ID auto-created in db (NOT googleId)
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // retrieve id from cookie to see which user it is
// passport.deserializeUser((id, done) => {
//   Users.findByPk(id)
//     .then((user) => {
//       // received user, pass them on to next stage
//       done(null, user);
//     })
//     .catch((err) => {
//       console.error('Failed to DESERIALIZE user by ID:', err);
//     });
// });

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
    const { id, emails, photos } = profile;

    //     // check if user already exists
    //     Users.findOne({ where: { googleId: id } })
    //       .then((currentUser) => {
    //         if (currentUser) {
    //           console.log('User is:', currentUser);
    //           // call serializeUser
    //           done(null, currentUser);
    //         } else {
    //           Users.create({
    //             googleId: id,
    //             email: emails[0].value,
    //             image: photos[0].value,
    //           })
    //             .then((newUser) => {
    //               console.log('New user created:', newUser);
    //               // call serializeUser
    //               done(null, newUser);
    //             })
    //             .catch((err) => {
    //               console.error('Failed to CREATE new user:', err);
    //             });
    //         }
    //       })
    //       .catch((err) => {
    //         console.error('Failed to FIND user by googleId:', err);
    //       });
  })
);
