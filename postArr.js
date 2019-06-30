var fs = require("fs");
var express = require('express');
var router = express.Router();

setTimeout(function(){
    router.post('/registration', (req, res, next)=>{
        // res.send('welcome, ')
        console.log("req => email:",req.body.email, " and pwd:", req.body.password);
    })

}, 500);

module.exports = router;