var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('admin/menu_ppal', {
    layout: 'admin/layout_a',
    persona: req.session.nombre,

  });
});
// boton trabajos realizados
router.get('/trabajos_realizados', function (req, res, next) {
  res.render('admin/trabajos_realizados', {
    layout: 'admin/layout_a',
  });
});

// boton novedades  
router.get('/novedades', function (req, res, next) {
  res.render('admin/novedades', {
    layout: 'admin/layout_a',
  });
});
// cerrar sesion 
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout_a'
  });
});

module.exports = router;