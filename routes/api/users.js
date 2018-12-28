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
const validationUserInput = require('../../validation/user');

// Load User model
const User = require('../../models/User');

// response headers
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

// @route   GET /users
// @desc    test users route
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'users works' }));

// @route   POST /users/register
// @desc    Register user
// @access  Public
var corsOptions = {
  origin: 'http://www.tripimagine.com',
  // #deploymentVariableToChange
  credentials: false,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}; /* change origin to 'http://www.tripimagine.com' when prep for production, 'true' (without the quotation) in dev */

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
  origin: 'http://www.tripimagine.com',
  // #deploymentVariableToChange
  credentials: false,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}; /* change origin to 'http://www.tripimagine.com' when prep for production, 'true' (without the quotation) in dev */

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
              { expiresIn: 600000 }, 
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

// @route   POST /users
// @desc    update user info
// @access  Public
var corsOptions = {
  origin: 'http://www.tripimagine.com',
  // #deploymentVariableToChange
  credentials: false,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}; /* change origin to 'http://www.tripimagine.com' when prep for production, 'true' (without the quotation) in dev */

router.options('/', cors(corsOptions));

router.post('/', cors(corsOptions), (req, res) => {
  const { errors, isValid } = validationUserInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // get fields
  const userFields = {};
  if (req.body.id) userFields.id = req.body.id;
  if (req.body.name) userFields.name = req.body.name;
  if (req.body.email) userFields.email = req.body.email;

  User.findOne({ _id: userFields.id })
    .then(user => {
      if (user) {
        // update
        User.findOneAndUpdate(
          { _id: userFields.id },
          { $set: userFields },
          { new: true }
        ).then(user => res.json(user));
      } else {
        // create

        // check if email exists
        User.findOne({ email: userFields.email })
          .then(user => {
            if (user) {
              errors.email = 'That email already exists';
              return res.status(400).json(errors);
            }

            // save profile
            new User(userFields).save().then(user => res.json(user));
          })
      }
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
