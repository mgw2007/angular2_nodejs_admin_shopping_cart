var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true}
}, {
    timestamps: true
});
var Order = mongoose.model('Order', orderSchema);
Order.getAll = function (query, callback) {
    Order.find().populate('user').exec(function (err, orders) {
        console.log(orders);
        if (err) throw  err;
        callback(orders);
    })
};

module.exports = Order
