var express = require('express');
var router = express.Router();
var moment = require('moment');
moment.locale('es');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nosotros',{ title_nos: moment('24/06/1980','DD/MM/YYYY').fromNow()  });
});

module.exports = router;



