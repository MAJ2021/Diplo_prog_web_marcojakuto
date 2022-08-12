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

// update / modificar

router.get('/modificar_trabajos_realizados', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await trabajosrealizadosModel.getTrabajosrealizadosById(id);
  res.render('admin/modificar_trabajos_realizados', {
    layout: 'admin/layout_a',
    novedad
  })
});

router.post('/modificar_trabajos_realizados', async (req, res, next) => {
  try {

    if (req.body.instrumentacion_electricidad != "" && req.body.automatizacion_control != "" && req.body.automatizacion_control != "" && req.body.prototipos_sistemas_enbebidos != "" && req.body.programacion_it != "" && req.body.direccion != "" && req.body.cp != "" && req.body.telefono != "") {

      var obj = {
        instrumentacion_electricidad: req.body.instrumentacion_electricidad,
        automatizacion_control: req.body.automatizacion_control,
        prototipos_sistemas_enbebidos: req.body.prototipos_sistemas_enbebidos,
        programacion_it: req.body.programacion_it,
        direccion: req.body.direccion,
        cp: req.body.cp,
        telefono: req.body.telefono
      }

      console.log(obj)

      await trabajosrealizadosModel.modificarTrabajosrealizadosById(obj, req.body.id);
      res.redirect('/admin/trabajos_realizados');
    } else {

      res.render('admin/modificar_trabajos_realizados',{
        layout: 'admin/layout_a',
        error: true,
        message: 'Todos los campos son requeridos',

      })
    }

  }
  catch (error) {

    res.render('admin/modificar_trabajos_realizados', {
      layout: 'admin/layout_a',
      error: true, message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;