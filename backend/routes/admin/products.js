var router = require('express').Router();
var productsCtrl = require('../../controllers/admin/products');
var roles = require('../../config/roles');

router.get('/',roles.can('products.view'), productsCtrl.index);
router.get('/:id',roles.can('products.view'), productsCtrl.get);
router.post('/',roles.can('products.manage'), productsCtrl.save);
router.put('/:id',roles.can('products.manage'), productsCtrl.save);
router.delete('/:id',roles.can('products.manage'), productsCtrl.delete);

module.exports = router;