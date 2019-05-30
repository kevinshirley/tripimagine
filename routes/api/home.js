var express = require('express');
var router = express.Router();
var path = require('path');

// @route   GET /
// @desc    route to home
// @access  Public
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = router;
