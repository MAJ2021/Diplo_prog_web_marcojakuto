var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout_a',
    persona: req.session.nombre,
    novedades
  });
});


// boton agregar
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout_a',

  });
});

router.post('/agregar', async (req, res, next) => {
  try { 
       if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo !=""){
        await novedadesModel.insertNovedades(req.body);
        res.redirect('/admin/novedades')
       } else {
        res.render('admin/agregar',{
          layout:'admin/layout_a',
          error: true, 
          message:'Todos los campos son requeridos'
        })
       }
  } catch (error)  {
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout_a',
      error: true, message:'No se cargo la novedad'
    })
  }
})
module.exports = router;