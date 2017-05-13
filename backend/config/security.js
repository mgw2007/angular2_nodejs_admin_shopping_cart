require('./../routes/security');
require('./../routes/admin/security');
var app = require('../expressApp');
var roles = require('./roles');
app.use(roles.middleware());
roles.use(function (req, action) {
    if (req.user.isSuperAdmin) {
        return true;
    }
    else {
        var actionDetails = action.split('.');
        if (req.user.roles[actionDetails[0]]) {
            if (req.user.roles[actionDetails[0]] == 'manage') {
                return true;
            }
            else {
                if (req.user.roles[actionDetails[0]] == actionDetails[1]) {
                    return true;
                }
            }
        }
        return false;
    }
})
