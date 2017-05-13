var ConnectRoles = require('connect-roles');
var roles = new ConnectRoles({
    failureHandler: function (req, res, action) {
        var accept = req.headers.accept || '';
        res.status(403);
        if (~accept.indexOf('html')) {
            res.render('access-denied', {action: action});
        } else {
            res.send('Access Denied - You don\'t have permission to: ' + action);
        }
    }
});

module.exports = roles;