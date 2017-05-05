var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var adminSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})
adminSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}
adminSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
adminSchema.pre('save', function (next) {
    if (this.isNew && this.password) {
        this.password = this.encryptPassword(this.password);
    }
    next();
})
var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
module.exports.getAdminByEmail = function (email, callback) {
    Admin.findOne({email: email}, callback)
}
module.exports.getAdminById = function (id, callback) {
    Admin.findById(id, callback)
}