var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* creo var para session ejemplo 2 */
var session = require('express-session');
/* creo las rutas para admin login */
var loginRouter = require('./routes/admin/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* justo debajo de public sino no funciona*/
app.use(session({
  secret: 'dYrq8Hq8TtJ9mXmc?Pip',
  resave: false,
  saveUninitialized: true
}));


app.use('/', loginRouter);


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
