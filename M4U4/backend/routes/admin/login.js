var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var conocido = req.session.nombre;
  res.render('admin/ingreso_datos', {
    layout: 'admin/layout_a',
    title: 'Sessiones en express.js',
    conocido1: conocido,
    nombre: req.session.nombre
  });
});

/* codigo para procesar el ingreso boton */
router.post('/ingresar', function (req, res) {
  console.log(req.body.nombre)
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');

});

router.get('/salir', function(req,res){
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

