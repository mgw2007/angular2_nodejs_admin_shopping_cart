var url = require('url');
module.exports = {

    isLoggedInUser: function (req, res, next) {

        if (req.isAuthenticated()) {
            return next();
        }
        req.session.prevUrl = req.originalUrl;
        return res.redirect('/user/signin');
    },
    isNotLoggedInUser: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }
}