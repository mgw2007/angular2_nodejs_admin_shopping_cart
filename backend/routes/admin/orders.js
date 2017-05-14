var router = require('express').Router();
var ordersCtrl = require('../../controllers/admin/orders');
var roles = require('../../config/roles');

router.get('/',roles.can('orders.view'), ordersCtrl.index);
router.get('/invoice/:id',roles.can('orders.view'), ordersCtrl.invoice);

module.exports = router;