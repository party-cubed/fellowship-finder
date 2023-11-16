
const { default: axios } = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bycrypt = require('bcrypt');
//const cloudinary = require('cloudinary');
const cloudinary = require('cloudinary').v2;
const db = require('./db/index');
require('dotenv').config();

const {app, io, server} = require('./app');

const { cloudinaryKeys } = require('../config/keys');

//const app = require('./app');

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));

//app.use(cors({ origin: true }));
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

app.use(cookieParser('mySecretKey'));

app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

const { User } = require('./db/models'); // Assuming you have a User model defined

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: 'dx4mrqtne',
  api_key: cloudinaryKeys.apiKey,
  api_secret: cloudinaryKeys.apiSecret
});

// Log the configuration
console.log(cloudinary.config());

app.post('/photos', (req, res) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  const { name } = req.body;
  //console.log(name);
  // Upload the image

  cloudinary.uploader.upload(name, options)
    .then((response) => {
      console.log('SUCCESS SERVER', response);
      res.status(200).send(response.secure_url);
    })
    .catch((error) => {
      console.error('server cloud post error', error);
      res.sendStatus(500)
    });
  //console.log(result);
});




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
    storyFocus
  } = req.body;

  console.log(
    'adds',
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
    storyFocus
  );

  try {
    const existingUser = await User.findOne({ where: { username } });
    const hashedPassword = bycrypt.hashSync(password, 10);
    if (existingUser) {
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
        storyFocus,
      });
      await existingUser.save();
    } else {
      const newUser = await User.create({
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
        storyFocus
      });
      await newUser.save();
      res.status(201).send(newUser);
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

app.use(express.json());


app.post('/authenticate', async (req, res) => {
  const { username } = req.body;


  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username, secret: username, first_name: username },
      { headers: { 'private-key': 'f6ef300d-fd54-4179-a2bb-2f20c0802a14' } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

io.on('connection', (socket) => {
  console.log('hey!')
  socket.on('room', (room) => {
    console.log("room")
  })

  socket.on('disconnect', () => {
    console.log('out')
  })
})

server.listen(PORT, (err) => {
  if (err) {
    console.error('server connection failed', err);
  }
  console.log(`Page running at: 127.0.0.1:${PORT}`);
});

