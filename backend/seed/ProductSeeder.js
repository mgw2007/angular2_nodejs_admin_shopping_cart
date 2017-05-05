var mongoose = require('mongoose');
var configs = require('./../config/configs');
mongoose.connect(configs.database);

var Product = require('../models/product');
var products = [
    new Product({
        imagePath: 'default',
        title: 'Gothic10 Video Game',
        description: 'Awesome Game !!!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'default',
        title: 'Gothic15 Video Game',
        description: 'Awesome Game !!!!!!',
        price: 15
    }),
    new Product({
        imagePath: 'default',
        title: 'Gothic20 Video Game',
        description: 'Awesome Game !!!!!!',
        price: 20
    }),
    new Product({
        imagePath: 'default',
        title: 'Gothic25 Video Game',
        description: 'Awesome Game !!!!!!',
        price: 25
    }),
    new Product({
        imagePath: 'default',
        title: 'Gothic30 Video Game',
        description: 'Awesome Game !!!!!!',
        price: 30
    })
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function () {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
