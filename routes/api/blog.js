const express = require('express');
const router = express.Router();
const axios = require('axios');

// Load Post validations
const validatePostInput = require('../../validation/post');

// Load Post model
const Post = require('../../models/Post');

// response headers
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 360000);
  next();
});

// @route   GET /posts
// @desc    get posts from blog.tripimagine.com (wordpress)
// @access  Private
router.get('/posts', (req, res) => {
  // const errors = {};

  axios.get('https://blog.tripimagine.com/wp-json/wp/v2/posts?per_page=10')
  .then(posts => {
    return res.json(posts.data);
  })
  .catch(error => {
    console.log(error);
  });

  // Profile.findOne({ user: req.params.user_id })
  //   .populate('user', ['name', 'avatar'])
  //   .then(profile => {
  //     if (!profile) {
  //       errors.noprofile = 'There is no profile for this user';
  //       return res.status(404).json(errors);
  //     }

  //     res.json(profile);
  //   })
  //   .catch(err => res.status(404).json({ noprofile: 'There is no profile for this user' }));
});