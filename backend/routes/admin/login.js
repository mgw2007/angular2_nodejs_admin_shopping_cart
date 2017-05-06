var router  = require('express').Router();
var adminsCtrl = require('../../controllers/admin/admins');

router.post('/',adminsCtrl.login);

module.exports = router;