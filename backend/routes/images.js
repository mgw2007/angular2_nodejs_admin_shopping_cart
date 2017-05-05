var router = require('express').Router();
var imageCtrl = require('../controllers/images');

router.get('/showProduct', imageCtrl.showProduct);

module.exports = router;
