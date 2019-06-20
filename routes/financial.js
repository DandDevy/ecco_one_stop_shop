var express = require('express');
var router = express.Router();

/* GET financial page. */
router.get('/', function(req, res, next) {
    res.render('financial');
});

module.exports = router;

