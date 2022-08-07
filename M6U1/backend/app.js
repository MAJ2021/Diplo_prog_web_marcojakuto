var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();


var session = require('express-session');
/* creo las rutas para admin login */
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');

var menu_ppalRouter = require('./routes/admin/menu_ppal');

var trabajos_realizadosRouter = require('./routes/admin/trabajos_realizados');

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
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    }
    else {
      res.redirect('/admin/login');
    }
  }
  catch (error) {
    console.log(error);
  }
}


app.use('/', indexRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/admin/menu_ppal', secured, menu_ppalRouter);

app.use('/admin/trabajos_realizados', secured, trabajos_realizadosRouter);

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
