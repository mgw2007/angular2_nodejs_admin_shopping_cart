var router = require('express').Router();
var passport = require('passport');
var app = require('../../expressApp');
router.get('/dashboard', passport.authenticate('jwt', {session: false}));
app.use('/admin', router);
