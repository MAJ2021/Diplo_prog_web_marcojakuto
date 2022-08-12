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
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout_a',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout_a',
      error: true, message: 'No se cargo la novedad'
    })
  }
})

// eliminar

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
})

// update / modificar

router.get('/modificar_novedades/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad= await novedadesModel.getNovedadById(id);
  res.render('admin/modificar_novedades', {
    layout: 'admin/layout_a',
    novedad
  })
});

router.post('/modificar_novedades', async (req, res, next) => {
  try {
   
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    
    console.log(obj)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  }
  catch (error) {
    
    res.render('admin/modificar_novedades', {
      layout: 'admin/layout_a',
      error: true, message: 'No se modifico la novedad'
    })
  }
})




module.exports = router;