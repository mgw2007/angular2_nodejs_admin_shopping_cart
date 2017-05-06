var mongoose = require('mongoose');
var configs = require('./../config/configs');
mongoose.connect(configs.database);

var Admin = require('../models/admin');
var admins = [
    new Admin({
        name: 'Admin',
        email: 'admin@mina.com',
        password: 123123
    })
];
var done = 0;
for (var i = 0; i < admins.length; i++) {
    admins[i].save(function () {
        done++;
        if (done == admins.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
