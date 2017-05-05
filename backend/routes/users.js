var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var Cart = require('../models/cart');
var userCtrl = require('../controllers/users');
var isNotLoggedInUser = require('../config/isLoggin').isNotLoggedInUser;

var csrfProtection = csrf();
router.use(csrfProtection);
var isLoggedInUser = require('../config/isLoggin').isLoggedInUser;

router.get('/profile', userCtrl.profile);

router.get('/logout', userCtrl.logout);

router.use(isNotLoggedInUser);

router.get('/signup', userCtrl.signup);
router.post('/signup', userCtrl.submitSignup);
router.get('/signin', userCtrl.signin);
router.post('/signin', userCtrl.submitSignin,userCtrl.submitSigninSuccess);


module.exports = router;

// function isLoggedInUser(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/user/signin');
// }
// function isNotLoggedInUser(req, res, next) {
//     if (!req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// }