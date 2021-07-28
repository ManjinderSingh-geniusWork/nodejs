var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('admin');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;