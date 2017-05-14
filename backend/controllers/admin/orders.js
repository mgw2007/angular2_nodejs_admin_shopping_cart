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
        Order.getById(req.res.id, function (order) {
            var cart = new Cart(order.cart);
            order.items = cart.generateArray()
            res.render('shop/invoice.ejs', {order: order, layout: false}, function (err, html) {
                pdf.create(html).toStream(function (err, stream) {
                    stream.pipe(res);
                });
            });
        })
    }
}