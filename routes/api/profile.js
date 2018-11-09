const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const cors = require('cors');

// Load input validations
const validateProfileInput = require('../../validation/profile');
const validateTripInput = require('../../validation/trip');

// Load Profile, User model
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET /profile/:handle
// @desc    get profile by handle
// @access  Private
router.get('/:handle', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET /profile/:user_id
// @desc    get profile by user ID
// @access  Private
router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json({ noprofile: 'There is no profile for this user' }));
});

// @route   GET /profile/all
// @desc    get all profiles
// @access  Private
router.get('/users/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofiles = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET /profile
// @desc    get current users profile
// @access  Private
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST /profile
// @desc    create or edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.gender) profileFields.gender = req.body.gender;
  if (req.body.timezone) profileFields.timezone = req.body.timezone;
  if (req.body.notificationViaText) profileFields.notificationViaText = req.body.notificationViaText;
  // social
  profileFields.social = {};
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if (profile) {
        // update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // create

        // check if handle exists
        Profile.findOne({ handle: profileFields.handle })
          .then(profile => {
            if (profile) {
              errors.handle = 'That handle already exists';
              return res.status(400).json(errors);
            }

            // save profile
            new Profile(profileFields).save().then(profile => res.json(profile));
          })
      }
    });
});

// @route   POST /profile/trip
// @desc    create or edit new trip
// @access  Private
router.post('/trip', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateTripInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      const newTrip = {
        destination: req.body.destination,
        from: req.body.from,
        to: req.body.to,
        message: req.body.message
      }

      if (req.body.budget) newTrip.budget = req.body.budget;

      // add new trip to array
      profile.trip.unshift(newTrip);

      profile.save().then(trip => res.json(trip));
    });
});

// @route   POST /profile/trip/:trip_id
// @desc    delete trip from profile
// @access  Private
router.delete('/trip/:trip_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      // get trip id index
      const removeIndex = profile.trip
        .map(item => item.id)
        .indexOf(req.params.trip_id);

        // remove
        profile.trip.splice(removeIndex, 1);

      profile.save().then(profile => res.json(profile));
    });
});

// @route   DELETE /profile/
// @desc    delete a profile and a user
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id })
    .then(() => {
      User.findOneAndRemove({ _id: req.user.id })
        .then(() => res.json({ success: true }))
    })
});

module.exports = router;
