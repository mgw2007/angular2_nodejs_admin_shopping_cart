var clientRoutes = require('../routes/routes');
var adminRoutes = require('../routes/admin/routes');
var app = require('../expressApp');
clientRoutes.forEach(function (route) {
    app.use(route.route, route.target);
})
adminRoutes.forEach(function (route) {
    app.use('/admin' + route.route, route.target);
})
