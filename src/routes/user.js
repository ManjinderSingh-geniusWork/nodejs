
var express = require('express');

var router = express.Router();


const userContronler = require('../controllers/userController')


// Home page route.
router.get('/', userContronler.index)

// About page route.
router.get('/to-do', userContronler.toDo)

module.exports = router;