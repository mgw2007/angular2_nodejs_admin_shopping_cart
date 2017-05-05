var express = require('express');
var Cart = require('../models/cart');
var Order = require('../models/order');

module.exports = {

    checkout: function (req, res, next) {
        if (!req.session.cart) {
            return res.redirect('/shoppingCart');
        }
        var error = req.flash('error')[0];
        var cart = new Cart(req.session.cart);
        return res.render('shop/checkout', {products: cart.generateArray(), total: cart.totalPrice, error: error})
    },
    doCheckout: function (req, res, next) {
        if (!req.session.cart) {
            return res.redirect('/shoppingCart');
        }
        var cart = new Cart(req.session.cart);

        var stripe = require("stripe")(
            "sk_test_vhbdr4HLLjJHjUKg0G5gZy4X"
        );

        stripe.charges.create({
            amount: cart.totalPrice * 100,
            currency: "usd",
            source: req.body.stripeToken, // obtained with Stripe.js
            description: "Charge for test"
        }, function (err, charge) {
            console.log(err)
            // asynchronously called
            if (err) {
                req.flash('error', err.message);
                return res.redirect('/checkout');
            }
            var order = new Order({
                user: req.user,
                cart: cart,
                address: req.body.address,
                name: req.body.name,
                paymentId: charge.id
            });
            order.save(function (error, result) {
                if (error) throw error;

                req.flash('success', 'Successfully payment');
                req.session.cart = null
                return res.redirect('/');
            });

        });
    }
}