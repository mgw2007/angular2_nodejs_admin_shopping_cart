var router = require('express').Router();
var adminsCtrl = require('../../controllers/admin/admins');
var roles = require('../../config/roles');
router.get('/adminProfile', adminsCtrl.adminProfile);
router.post('/checkEmailExist', adminsCtrl.checkEmailExist);
router.get('/admins', roles.can('admins.view'), adminsCtrl.index);
router.get('/admins/:id', roles.can('admins.view'), adminsCtrl.get);
router.post('/admins', roles.can('admins.manage'), adminsCtrl.save);
router.delete('/admins/:id', roles.can('admins.manage'),adminsCtrl.delete);
router.put('/admins/:id', roles.can('admins.manage'), adminsCtrl.save);


module.exports = router;