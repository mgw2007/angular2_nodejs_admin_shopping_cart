var router = require('express').Router();
var passport = require('passport');
var app = require('../../expressApp');
router.post('/admin/login', function (req, res,next) {
    return next();
})
app.use('/admin', passport.authenticate('jwt', {session: false}));
app.use('/admin', router);

