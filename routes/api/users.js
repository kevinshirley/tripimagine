const express = require('express');
const app = express();
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const cors = require('cors');

// Load input validation
const validationRegisterInput = require('../../validation/register');
const validationLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route   GET /users
// @desc    test users route
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'users works' }));

// @route   POST /users/register
// @desc    Register user
// @access  Public
var corsOptions = {
  origin: true,
  credentials: false,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}; /* change origin to 'http://www.tripimagine.com' when prep for production */

app.options('/register', cors(corsOptions));

router.post('/register', cors(corsOptions), (req, res) => {
  const { errors, isValid } = validationRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json({errors});
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // size
          r: 'pg', // rating
          d: 'mm' // default
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
});

// @route   POST /users/login
// @desc    Login User / Returning Token
// @access  Public
var corsOptions = {
  origin: true,
  credentials: false,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}; /* change origin to 'http://www.tripimagine.com' when prep for production */

app.options('/login', cors(corsOptions));

router.post('/login', cors(corsOptions), (req, res) => {
  const { errors, isValid } = validationLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email })
    .then(user => {
      // check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      // check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // user matched

            const payload = { id: user.id, name: user.name, avatar: user.avatar, isAdmin: user.isAdmin } // create jwt payload

            // sign token
            jwt.sign(
              payload, 
              keys.secretOrKey, 
              { expiresIn: 43400 }, 
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = 'Password Incorrect';
            return res.status(400).json(errors);
          }
        });
    });
});

// @route   GET /users/current
// @desc    return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;
