var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var SessionStore = require('connect-mongo')(session)
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var configs = require('./config/configs');
var app = require('./expressApp');
mongoose.connect(configs.database);
// load configs
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(validator());
app.use(cookieParser());
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    store: new SessionStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 30 * 60 * 1000}
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
})

require('./config/security');
require('./config/routes');


app.use('/admin_dashboard/*',function (req,res,next) {
    res.sendFile(path.join(__dirname,'public/admin_dashboard/index.html'));
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    console.log(err.message);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', {layout: false});
});

module.exports = app;
