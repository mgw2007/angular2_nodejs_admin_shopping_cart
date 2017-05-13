var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})
userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.plugin(uniqueValidator);
userSchema.plugin(uniqueValidator, { message: '{PATH} is already exist.' });


module.exports = User = mongoose.model('User', userSchema);


module.exports.getUserByEmail = function (email, callback) {
    User.findOne({email: email}, callback)
}
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback)
}