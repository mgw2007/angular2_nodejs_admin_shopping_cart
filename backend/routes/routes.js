var indexRoutes = require('./index');
var userRoutes = require('./users');
var shoppingCartRoutes = require('./shoppingCart');
var checkoutRoutes = require('./checkout');
var imagesRoutes = require('./images');

module.exports = [
    {route: '/', target: indexRoutes},
    {route: '/', target: shoppingCartRoutes},
    {route: '/', target: checkoutRoutes},
    {route: '/user', target: userRoutes},
    {route: '/images', target: imagesRoutes}
]