var express = require('express');
var router = express.Router();
var shoppingCtrl = require('../controllers/shoppingCart');
router.get('/shoppingCart', shoppingCtrl.index);
router.get('/addToCard/:id', shoppingCtrl.addProductToCar);
router.get('/reduceCard/:id', shoppingCtrl.reduceProductFromCard);
router.get('/removeAllCard/:id', shoppingCtrl.removeProductFromCard);

module.exports = router;



