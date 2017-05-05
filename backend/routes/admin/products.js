var multer = require('multer');
var router = require('express').Router();
var productsCtrl = require('../../controllers/admin/products');

router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.get);
router.post('/', productsCtrl.save);
router.put('/:id', productsCtrl.save);
router.delete('/:id', productsCtrl.delete);

module.exports = router;