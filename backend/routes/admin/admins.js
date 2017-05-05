var router  = require('express').Router();
var adminsCtrl = require('../../controllers/admin/admins');

router.post('/login',adminsCtrl.login);

module.exports = router;