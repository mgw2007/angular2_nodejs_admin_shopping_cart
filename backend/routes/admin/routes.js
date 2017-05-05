var indexRoutes = require('./dashbrd');
var adminRoutes = require('./admins');
var productsRoutes = require('./products');

module.exports = [
    {route: '/', target: adminRoutes},
    {route: '/dashboard', target: indexRoutes},
    {route: '/products', target: productsRoutes}
];