var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

/* GET registration page. */
router.get('/', function(req, res, next) {
    res.render('registration');
});
const app = express();


app.post('registration.ejs', (req, res, next)=>{
    // res.send('welcome, ')
    console.log("req =>",req.body.email);
})



module.exports = router;
