var router  = require('express').Router();
var loginCtrl = require('../../controllers/admin/login');

router.post('/',loginCtrl.login);

module.exports = router;