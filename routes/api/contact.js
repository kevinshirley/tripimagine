const express = require('express');
const router = express.Router();

// @route   GET /contact
// @desc    contact page route
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'contact works' }));

module.exports = router;
