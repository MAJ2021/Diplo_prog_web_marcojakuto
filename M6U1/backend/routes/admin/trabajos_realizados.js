var express = require('express');
var router = express.Router();
var trabajosrealizadosModel = require('../../models/trabajosrealizadosModel');


router.get('/', async function (req, res, next) {

  var trabajosrealizados = await trabajosrealizadosModel.getTrabajosrealizados();

  res.render('admin/trabajos_realizados', {
    layout: 'admin/layout_a',
    persona: req.session.nombre,
    trabajosrealizados
  });
});


module.exports = router;