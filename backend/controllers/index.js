var Product = require('../models/product')
module.exports = {
    index: function (req, res, next) {
        var success = req.flash('success')[0];

        Product.getAll({}, function (products) {
            res.render('shop/index', {title: 'Shopping cart', products: products, success: success});
        });
    }
}