const {} = require('express');
const nodemailer = require('nodemailer');
const correoHTMLF1A = require('./correof1A');
const correoHTMLF1R = require('./correof1R');

//Método para enviar correo Fase 1- Aceptación de solicitud de beca
const envioCorreoF1A = (req= request, res= response) => {
    let body = req.body;

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user:'devspace871@gmail.com',
            pass:'vyqt dmnc xwqf rqey'
        }
    });

    const opciones = {
        from:'Solicitud de becas',
        subject: 'Aceptación de solicitud de beca',
        to: body.email,
        html: correoHTMLF1A
    };

    config.sendMail(opciones,function(error, result){
        if(error) return res.json({
                ok: false,
                msg: error
            });
        
        return res.json({
            ok: true,
            mensaje: result
        });
    })
}

//Método para enviar correo Fase 1- Rechazo de solicitud de beca
const envioCorreoF1R = (req= request, res= response) => {
    let body = req.body;

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user:'devspace871@gmail.com',
            pass:'vyqt dmnc xwqf rqey'
        }
    });

    const opciones = {
        from:'Solicitud de becas',
        subject: 'Rechazo de solicitud de beca',
        to: body.email,
        html: correoHTMLF1R
    };

    config.sendMail(opciones,function(error, result){
        if(error) return res.json({
                ok: false,
                msg: error
            });
        
        return res.json({
            ok: true,
            mensaje: result
        });
    })
}

module.exports = {envioCorreoF1A, envioCorreoF1R};