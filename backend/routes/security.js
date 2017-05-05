var express = require('express');
var router = express.Router()
var isLoggedInUser = require('../config/isLoggin').isLoggedInUser;
var app = require('../expressApp');
router.get('/profile', isLoggedInUser);
router.get('/checkout', isLoggedInUser);
router.post('/checkout', isLoggedInUser);
app.use('/user', router);
