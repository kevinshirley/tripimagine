const express = require('express');
const router = express.Router();

// @route   GET /about-us
// @desc    about-us page route
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'about-us works' }));

module.exports = router;
