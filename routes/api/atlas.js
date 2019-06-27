const express = require('express');
const router = express.Router();

// @route   GET /atlas
// @desc    atlas page route
// @access  Public
router.get('/', (req, res) => res.json({ msg: 'atlas works' }));

module.exports = router;
