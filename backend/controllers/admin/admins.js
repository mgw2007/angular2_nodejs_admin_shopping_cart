var jwt = require('jsonwebtoken');
var Admin = require('../../models/admin');
var config = require('../../config/configs');

module.exports = {
    login: function (req, res, next) {
        var email = req.body.email;
        var password = req.body.password;
        Admin.getAdminByEmail(email, function (err, admin) {
            if (err) throw  err;
            if (!admin) {
                return res.json({success: false, message: 'Admin not found'});
            }
            if (admin.validPassword(password)) {
                var token = jwt.sign(admin, config.secret, {
                    expiresIn: 604800
                });
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    admin: {
                        id: admin._id,
                        name: admin.name,
                        email: admin.email
                    },
                    message: 'Welcome to system'
                });
            }
            else {
                return res.json({success: false, message: 'Admin not found'});
            }
        })
    },
    adminData: function (req, res) {
        res.json({admin: req.user});
    }
}