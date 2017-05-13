var passport = require('passport');
var Order = require('../models/order');
var User = require('../models/user');
var Cart = require('../models/cart');
module.exports = {
    profile: function (req, res) {
        Order.find({'user': req.user}, function (error, orders) {
            if (error) throw  error;
            var cart;
            orders.forEach(function (order) {
                cart = new Cart(order.cart);
                order.items = cart.generateArray()
            })
            res.render('user/profile', {title: 'USer Profile', orders: orders});
        })
    },
    logout: function (req, res, next) {
        req.logout();
        res.redirect('/');
    },
    signup: function (req, res) {
        var error = req.flash('signupErrors');
        res.render('user/signup', {title: 'ShoppingCart-Sign up', csrfToken: req.csrfToken(), errors: error})
    },
    submitSignup: function (req, res, next) {
        req.checkBody({
            'name': {
                notEmpty: {
                    errorMessage: 'Name required'
                }
            },
            'email': {
                notEmpty: {
                    errorMessage: 'Email required'
                },
                isEmail: {
                    errorMessage: 'Invalid Email'
                }
            },
            'password': {
                notEmpty: {
                    errorMessage: 'Password required'
                },
                isLength: {
                    options: [{min: 4}],
                    errorMessage: 'Password minlength 4 character'
                }
            },
            'confirm_password': {
                equals: {
                    options: [req.body.password],
                    errorMessage: 'Confirm password not matched'
                }
            }
        });
        req.getValidationResult().then(function (result) {
            // do something with the validation result

            var messages = [];
            var reqErrors = result.useFirstErrorOnly().array();
            if (reqErrors.length > 0) {
                console.log(reqErrors);
                reqErrors.forEach(function (error) {
                    messages.push(error.msg);
                });
                console.log(messages);
                req.flash('signupErrors', messages);
                return res.redirect('/user/signup');
            } else {
                var newUser = new User();
                newUser.name = req.body.name;
                newUser.email = req.body.email;
                newUser.password = newUser.encryptPassword(req.body.password);
                newUser.save(function (err) {
                    if (err) {
                        for (var i in err.errors) {
                            messages.push(err.errors[i].message);
                        }
                        req.flash('signupErrors', messages);
                        return res.redirect('/user/signup');
                    }
                    else {
                        var url = '';
                        if (req.session.prevUrl) {
                            url = req.session.prevUrl;
                            req.session.prevUrl = null;
                        }
                        if(!url)
                        {
                            url = '/user/profile';
                        }
                        return res.redirect(url)
                    }
                })
            }
        });

    },
    signin: function (req, res) {
        var error = req.flash('error')
        res.render('user/signin', {title: 'ShoppingCart-Sign In', csrfToken: req.csrfToken(), messages: error})
    },
    submitSignin: passport.authenticate('local.signin', {
        failureRedirect: '/user/signin',
        failureFlash: true
    }),
    submitSigninSuccess: function (req, res, next) {
        var url = 'user/profile';

        if (req.session.prevUrl) {
            url = req.session.prevUrl;
            req.session.prevUrl = null;
        }
        console.log(url);
        return res.redirect(url)
    }

}