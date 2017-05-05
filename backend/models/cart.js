module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    }
    this.reduceByOne = function (id) {
        var storedItem = this.items[id];
        storedItem.qty--;
        storedItem.price -= storedItem.item.price;
        this.totalQty--;
        this.totalPrice -= storedItem.item.price;
        if (storedItem.qty <= 0) {
            delete this.items[id];
        }
    }

    this.removeItem = function (id) {
        var storedItem = this.items[id];
        this.totalQty -= storedItem.qty;
        this.totalPrice -= storedItem.price;
        delete this.items[id];
    }


    this.generateArray = function () {
        var arr = [];
        for (var i in this.items) {
            arr.push(this.items[i]);
        }
        return arr;
    }
}