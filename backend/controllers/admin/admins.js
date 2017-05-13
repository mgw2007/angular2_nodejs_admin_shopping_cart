var jwt = require('jsonwebtoken');
var Admin = require('../../models/admin');
var config = require('../../config/configs');
var validateAdminOptions = function (oldAdmin) {
    var options = {
        'name': {
            notEmpty: {
                errorMessage: 'Title required'
            },
            isLength: {
                options: [{min: 4}],
                errorMessage: 'Title minlength 4 character'
            }
        },
        'email': {
            notEmpty: {
                errorMessage: 'Email required'
            },
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        }
    }
    if (oldAdmin) {
        options.password = {
            optional: {
                options: [{checkFalsy: true}],
            },
            isLength: {
                options: [{min: 4}],
                errorMessage: 'Password minlength 4 character ax'
            }
        }
    }
    else {
        options.password = {
            notEmpty: {
                errorMessage: 'Password required'
            },
            isLength: {
                options: [{min: 4}],
                errorMessage: 'Password minlength 4 character b'
            }
        }
    }
    return options;
}
module.exports = {
    adminProfile: function (req, res) {
        Admin.getAdminById(req.user._id, function (err, admin) {
            if (admin) {
                res.json({admin: admin});
            }
        })
    },
    index: function (req, res) {
        Admin.getAll(function (admins) {
            res.status(200).json({success: true, admins: admins});
        })
    },
    get: function (req, res) {
        Admin.getAdminById(req.params.id, function (err, admin) {
            if (admin) {
                res.json(admin);
            }
            else {
                res.json({name: '', 'email': '', isSuperAdmin: ''});
            }
        })
    },
    delete: function (req, res) {
        Admin.deleteById(req.params.id, function () {
            res.json(true);
        })
    },
    checkEmailExist: function (req, res) {
        Admin.getAdminByEmail(req.body.email, function (err, admin) {
            if (admin) {
                if (admin.id != req.body.id) {

                    return res.json({exist: true});
                }
            }
            return res.json({exist: false});
        })
    },
    save: function (req, res) {
        req.checkBody(validateAdminOptions(req.params.id));
        req.getValidationResult().then(function (result) {
            var reqErrors = result.useFirstErrorOnly().array();
            if (reqErrors.length > 0) {
                var messages = [];
                reqErrors.forEach(function (error) {
                    messages.push(error.msg);
                });
                res.status(400).json({success: false, errors: messages});
            }
            else {
                if (req.params.id) {
                    Admin.getAdminById(req.params.id, function (err, admin) {

                        if (admin) {
                            admin.name = req.body.name;
                            admin.email = req.body.email;
                            if (req.body.password) {
                                admin.password = Admin.encryptPassword(req.body.password);
                            }
                            admin.isSuperAdmin = req.body.isSuperAdmin;
                            admin.roles = req.body.roles;
                            admin.save(function (err, doc) {
                                if (err) {
                                    var messages = [];
                                    for (var i in err.errors) {
                                        messages.push(err.errors[i].message);
                                    }
                                    res.status(400).json({success: false, 'error': messages});
                                }
                                else {
                                    res.status(200).json({success: true, admin: doc});
                                }
                            });
                        }
                    })
                }
                else {
                    var admin = new Admin({
                        name: req.body.name,
                        email: req.body.email,
                        password: Admin.encryptPassword(req.body.password),
                        isSuperAdmin: req.body.isSuperAdmin,
                        roles: req.body.roles
                    });
                    admin.save(function (err, doc) {
                        if (err) {
                            var messages = [];
                            for (var i in err.errors) {
                                messages.push(err.errors[i].message);
                            }
                            res.status(400).json({success: false, 'error': messages});
                        }
                        else {
                            res.status(200).json({success: true, admin: doc});
                        }
                    });
                }
            }
        })
    }
}