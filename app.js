var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var learnRouter = require('./routes/learn');
var financialRouter = require('./routes/financial');
var registrationRouter = require('./routes/registration');
const bodyParser = require('body-parser')

const postArr = require("./postArr.js");
var app = express();
// const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
// app.use(bodyParser.json);
app.use(express.urlencoded({ extended: true }));
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.post('/registration', (req, res, next)=>{
//   // res.send('welcome, ')
//   console.log("req =>",req.body.email);
// })


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/learn', learnRouter);
app.use('/financial', financialRouter);
app.use('/registration', registrationRouter);

app.use("/postArr", postArr);

//post for account registration
// app.post('/registration', urlencodedParser, function (req, res) {
//   // res.send('welcome, ')
//   console.log("req =>",req.body);
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
