var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var trabajosrealizadosModel = require('./../models/trabajosrealizadosModel');
var cloudinary = require('cloudinary').v2;


// novedades
router.get('/novedades', async function (req, res, next) {

    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 750,
                height: 650,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });

    res.json(novedades);

});
// fin novedades

// trabajos realizados

router.get('/trabajos_realizados', async function (req, res, next) {

    var trabajosrealizados = await trabajosrealizadosModel.getTrabajosrealizados();

    res.json(trabajosrealizados);

});


//fin trabajos realizados


module.exports = router;   