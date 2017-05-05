var Cart = require('../models/cart');
var Product = require('../models/product');

module.exports = {
    index: function (req, res, next) {
        if (!req.session.cart) {
            return res.render('shop/shopping-cart', {products: null})
        }
        var cart = new Cart(req.session.cart);
        return res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice,})
    },
    addProductToCar: function (req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        Product.findById(productId, function (error, product) {
            if (error) {
                return res.redirect('/');
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            return res.redirect('/');
        })
    },
    reduceProductFromCard: function (req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        Product.findById(productId, function (error, product) {
            if (error) {
                return res.redirect('/');
            }
            cart.reduceByOne(product.id);
            req.session.cart = cart;
            return res.redirect('/shoppingCart');
        })
    },
    removeProductFromCard: function (req, res, next) {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        Product.findById(productId, function (error, product) {
            if (error) {
                return res.redirect('/');
            }
            cart.removeItem(product.id);
            req.session.cart = cart;
            return res.redirect('/shoppingCart');
        })
    }
}