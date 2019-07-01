var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

/* GET registration page. */
router.get('/', function(req, res, next) {
    res.render('registration');
});

setTimeout(function(){
    router.post('/registration', (req, res, next)=>{
        // res.send('welcome, ')
        console.log("\n\n  POST TO ROUTE: req => email:",req.body.email, ", username:", req.body.userName, " and pwd:", req.body.password,"\n");
    })

}, 500);




module.exports = router;
