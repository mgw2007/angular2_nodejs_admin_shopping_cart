var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');

var adminSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true,select:false},
    isSuperAdmin: {type: Boolean, required: false},
    roles: {}
}, {
    timestamps: true
});
adminSchema.methods.validPassword = function (password) {
    console.log('PASSSWORD ' , this.password)
    return bcrypt.compareSync(password, this.password);
}

adminSchema.plugin(uniqueValidator);
adminSchema.plugin(uniqueValidator, { message: '{PATH} is already exist.' });


var Admin = mongoose.model('Admin', adminSchema);
Admin.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

Admin.getAdminByEmail = function (email, callback) {
    Admin.findOne({email: email}).select('+password').exec(callback);
}
Admin.getAdminById = function (id, callback) {
    Admin.findById(id, callback)
}
Admin.getAll = function (callback) {
    Admin.find(function (err, admins) {
        if (err) throw err;
        callback(admins);
    })
}
module.exports = Admin;
