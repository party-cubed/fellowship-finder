
<<<<<<< HEAD
// const express = require('express');
// const boddParser = require('body-parser');
// const cors = require('cors');
// const passport = require('passport');
// const expressSession = require('express-session');
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');
// const db = require('./db/index');

// const app = express();

// const PORT = 7002;

// app.use(boddParser.json());
// app.use(boddParser.urlencoded({ extended: true }));
// app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));

// app.use(cors({
//   origin: 'http://localhost:7002',
//   credentials: true
// }));

// app.use(cookieParser('mySecretKey'));

// app.use(passport.initialize());
// app.use(passport.session());


// app.post('/signin', (req, res) => {
//   const { username } = req.body;
//   const { password } = req.body;

//   const query = 'insert into users (`username`, `password`) values (?, ?)';
//   const query2 = 'select * from account where username = ?';

//   db.query(query2, [username], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     if (result.length > 0) {
//       res.send({ message: 'Username already exists' });
//     }
//     if (result.length === 0) {
//       const hashedPassword = bcrypt.hashSync(password, 10);
//       db.query(query, [username, password], (error, _result) => {
//         if (error) {
//           throw error;
//         }
//         res.send({ message: 'User created' });
//       });
//     }
//   });
// });


// app.listen(PORT, (err) => {
//   if (err) {
//     console.log('server connection failed', err);
//   }
//   console.log(`Page running at: 127.0.0.1:${PORT}`);
// });

const app = require('./app');

const PORT = 7002;
=======
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

app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

const { User } = require('./db/models'); // Assuming you have a User model defined

app.post('/signup', async (req, res) => {
  const {
    username,
    password,
    email,
    age,
    maxTravelDist,
    canHost,
    DM,
    combatHeaviness,
    strategyHeaviness,
    roleplayFocus,
    storyFocus
  } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      res.send({ message: 'Username already exists' });
    } else {
      const hashedPassword = bycrypt.hashSync(password, 10);
      await User.create({
        username,
        password: hashedPassword,
        email,
        age,
        maxTravelDist,
        canHost,
        DM,
        combatHeaviness,
        strategyHeaviness,
        roleplayFocus,
        storyFocus
      });
      res.send({ message: 'User created' });
    }
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

>>>>>>> passport

app.listen(PORT, (err) => {
  if (err) {
    console.log('server connection failed', err);
  }
  console.log(`Page running at: 127.0.0.1:${PORT}`);
});

<<<<<<< HEAD
=======
// const app = require('./app');

// const PORT = 3001;

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log('server connection failed', err);
//   }
//   console.log(`Page running at: 127.0.0.1:${PORT}`);
// });


>>>>>>> passport
