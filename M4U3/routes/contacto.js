var express = require('express');
var router = express.Router();
var moment = require('moment');

moment.locale('es');


/* GET home page. */
router.get('/', function(req, res, next,) {
  res.render('contacto', { title_cont: 'La hora local es: ' + moment().format('LTS')});
});


module.exports = router;
 