var express = require('express');
var router = express.Router();

/* GET learn page. */
router.get('/', function(req, res, next) {
    res.render('learn');
});

module.exports = router;

