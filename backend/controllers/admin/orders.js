var config = require('./../../config/configs');
var Order = require('../../models/order');
var Cart = require('../../models/cart');
var pdf = require('html-pdf');
module.exports = {
    index: function (req, res) {
        Order.getAll({}, function (orders) {
            var cart;
            orders.forEach(function (order) {
                cart = new Cart(order.cart);
                order.items = cart.generateArray()
            })
            res.json(orders);
        })
    },
    invoice: function (req, res) {
        res.render('shop/invoice.ejs', {data: 'test data', layout: false}, function (err, html) {
            pdf.create(html).toStream(function (err, stream) {
                stream.pipe(res);
            });
        });
    }
}