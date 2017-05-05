var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    imagePath: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true}
}, {
    timestamps: true
});

productSchema.pre('save', function (next) {
    if (this.isNew && this.password) {
        this.password = this.encryptPassword(this.password);
    }
    next();
})


var Product = mongoose.model('Product', productSchema);

Product.getAll = function (query, callback) {
    Product.find(function (err, products) {
        if (err) throw  err;
        callback(products);
    })
};
Product.getById = function (id, callback) {
    Product.findById(id, function (err, product) {
        if (err) throw  err;
        callback(product);
    })
}
Product.deleteById = function (id, callback) {
    Product.findOneAndRemove({_id: id}, function (err) {
        if (err) throw  err;
        callback();
    })
}
module.exports = Product;
