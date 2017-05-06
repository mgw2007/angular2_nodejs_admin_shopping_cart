var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var configs = require('./configs');
var User = require('../models/user');
var Admin = require('../models/admin');
var LocalStrategy = require('passport-local').Strategy;



passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    req.checkBody('email', 'Invalid Email').notEmpty().isEmail();
    req.checkBody('password', 'Password length 4 to 6 ').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function (error) {
            messages.push(error.msg);
        })
        return done(null, false, req.flash('error', messages))
    }
    User.getUserByEmail(email, function (error, user) {
        if (error) {
            console.log('Error here ', error)
            return done(error);
        }
        if (!user) {
            return done(null, false, {message: 'No User Found.'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Wrong Password.'});
        }
        return done(null, user);
    })
}));

// for Admin login
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
opts.secretOrKey = configs.secret;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    Admin.getAdminById(jwt_payload._doc._id, function (err, user) {
        if (err) {
            return done(err, false);
        } else {
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false, {message: "User not exist"})
            }
        }
    });
}));