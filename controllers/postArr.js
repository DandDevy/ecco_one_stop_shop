var fs = require("fs");
var express = require('express');
var router = express.Router();

setTimeout(function(){
    router.post('/registration', (req, res, next)=>{
        // res.send('welcome, ')
        console.log("POST: req => email:",req.body.email, ",username:", req.body.userName, "and pwd:", req.body.password);
    })

}, 500);

module.exports = router;