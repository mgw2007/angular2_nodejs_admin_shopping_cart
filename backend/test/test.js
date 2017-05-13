var configs = require('../config/configs');
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_ACCESS || configs.database);

var assert = require('assert');
var expect = require('chai').expect;
var User = require('../models/user');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});
describe('User', function () {
    describe('#Validate', function () {
        it('should have error ', function (done) {
            var u = new User({});
            u.validate(function (err) {
                expect(err.errors.name).to.exist;
                expect(err.errors.email).to.exist;
                expect(err.errors.password).to.exist;
                done();
            });
        });
        it('validate have no error', function (done) {
            var u = new User({
                name: 'mina',
                email: 'mina.mina@mina.com',
                password: '123'
            });
            u.validate(function (err) {
                expect(err).not.to.exist;
                done()
            })
        });
    });
});
