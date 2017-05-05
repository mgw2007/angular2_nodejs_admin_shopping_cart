var router  = require('express').Router();
var dashbrdCtrl = require('../../controllers/admin/dashbrd');

router.get('/',dashbrdCtrl.index);

module.exports = router;