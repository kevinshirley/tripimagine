const express = require('express');
const router = express.Router();
const passport = require('passport');
const isEmpty = require('../../validation/is-empty');
var cloudinary = require('cloudinary');

// @route   GET /profile/:handle
// @desc    get profile by handle
// @access  Private
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const isValid = isEmpty(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // sample upload code
  // cloudinary.uploader.upload("sample.jpg", {"crop":"limit","tags":"samples","width":3000,"height":2000}, function(result) { console.log(result) });

  // sample image manipulation tag
  // cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

  cloudinary.config({ 
    cloud_name: 'tripimagine', 
    api_key: '874837483274837', 
    api_secret: 'a676b67565c6767a6767d6767f676fe1' 
  });
});
