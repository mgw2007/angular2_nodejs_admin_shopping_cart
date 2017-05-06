var router  = require('express').Router();
var adminsCtrl = require('../../controllers/admin/admins');

router.get('/adminData',adminsCtrl.adminData);

module.exports = router;