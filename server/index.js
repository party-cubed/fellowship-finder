
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

app.listen(PORT, (err) => {
  if (err) {
    console.log('server connection failed', err);
  }
  console.log(`Page running at: 127.0.0.1:${PORT}`);
});

