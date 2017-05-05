var url = require('url');
module.exports = {

    isLoggedInUser: function (req, res, next) {
        console.log('zzzzzzzzzzzzzzzzzz')

        if (req.isAuthenticated()) {
            return next();
        }
        console.log('xxxxxxxx')
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