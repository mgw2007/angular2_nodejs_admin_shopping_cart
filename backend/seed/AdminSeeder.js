var mongoose = require('mongoose');
var configs = require('./../config/configs');
mongoose.connect(configs.database);

var Admin = require('../models/admin');
Admin.remove({}, function(err, result) {
    if(err) throw err;
    console.log('admis collection removed')
});
var admins = [
    new Admin({
        name: 'Admin',
        email: 'admin@mina.com',
        password: Admin.encryptPassword(123123),
        isSuperAdmin: true,
        roles: {}
    }),
    new Admin({
        name: 'Admin 2',
        email: 'admin2@mina.com',
        password: Admin.encryptPassword(123123),
        isSuperAdmin: false,
        roles: {products: 'manage', admins: 'view'}
    }),

];
var done = 0;
for (var i = 0; i < admins.length; i++) {
    admins[i].save(function () {
        done++;
        if (done == admins.length) {
    console.log('admis Added')
            
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
