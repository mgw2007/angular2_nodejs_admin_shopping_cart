var express = require('express');
var router = express.Router();
var checkoutCtrl = require('../controllers/checkout');
router.get('/checkout', checkoutCtrl.checkout);
router.post('/checkout', checkoutCtrl.doCheckout);

module.exports = router;
