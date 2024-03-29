var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var trabajosrealizadosModel = require('./../models/trabajosrealizadosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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

// contacto
router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'marco.jakuto@gmail.com',
        subject: 'contacto web',
        html: `${req.body.nombre} se conecto a través de la web y quiere mas información a este correo: ${req.body.email} <br> Ademas, hizo el siguiente comentario: ${req.body.mensaje} `
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }); 
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

// fin contacto
module.exports = router;   