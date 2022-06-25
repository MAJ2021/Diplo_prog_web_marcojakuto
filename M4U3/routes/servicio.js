var express = require('express');
var router = express.Router();
var moment = require('moment');
moment.locale('es');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicio', { title_serv:'Hoy es: ' + moment().format('LL') });
});

module.exports = router;
 