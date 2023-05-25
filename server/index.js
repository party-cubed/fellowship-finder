
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bycrypt = require('bcrypt');
const db = require('./db/index');

const app = require('./app');

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(cookieParser('mySecretKey'));

// app.use(passport.initialize());
// app.use(passport.session());
// require('./passportConfig')(passport);

const { User } = require('./db/models'); // Assuming you have a User model defined

app.post('/signup', async (req, res) => {
  const {
    username,
    password,
    email,
    age,
    maxTravelDist,
    sober,
    canHost,
    DM,
    combatHeaviness,
    strategyHeaviness,
    roleplayFocus,
    storyFocus,
    id
  } = req.body;

  try {
    const existingUser = await User.findByPk(id);
    const hashedPassword = bycrypt.hashSync(password, 10);
    await existingUser.update({
      username,
      password: hashedPassword,
      email,
      age,
      maxTravelDist,
      sober,
      canHost,
      DM,
      combatHeaviness,
      strategyHeaviness,
      roleplayFocus,
      storyFocus
    });
    await existingUser.save();
    res.send({ message: 'User created' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send({ message: 'An error occurred during signup' });
  }
});

app.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.send('No user exists');
    }
    if (user) {
      // eslint-disable-next-line no-shadow
      req.login(user, (err) => {
        if (err) {
          throw err;
        }
        res.send({
          message: 'User signed in',
          user
        });
      });
    }
  })(req, res, next);
});

// eslint-disable-next-line consistent-return
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}

app.get('/getUser', ensureAuthenticated, (req, res) => {
  res.send(req.user);
});


app.get('/getUser', (req, res) => {
  res.send(req.user);
});


app.listen(PORT, (err) => {
  if (err) {
    console.log('server connection failed', err);
  }
  console.log(`Page running at: 127.0.0.1:${PORT}`);
});

