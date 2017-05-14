var indexRoutes = require('./dashbrd');
var adminRoutes = require('./admins');
var productsRoutes = require('./products');
var ordersRoutes = require('./orders');
var loginRoutes = require('./login');

module.exports = [
    {route: '_login', target: loginRoutes}, // only login action url will be /admin_login because any url under /admin/* will be authenticated
    {route: '/', target: adminRoutes},
    {route: '/dashboard', target: indexRoutes},
    {route: '/products', target: productsRoutes},
    {route: '/orders', target: ordersRoutes}
];

