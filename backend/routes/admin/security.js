var passport = require('passport');
var app = require('../../expressApp');
app.use('/admin', passport.authenticate('jwt', {session: false}));

