const { } = require('express');
const { db } = require('../firebase.js');

const nodemailer = require('nodemailer');
const correoHTMLF1A = require('./correof1A');
const correoHTMLF1R = require('./correof1R');
const correoHTMLF2A = require('./correof2A');
const correoHTMLF2R = require('./correof2R');

// Método para enviar correo Fase 1- Aceptación de solicitud de beca
const envioCorreoF1A = async (req = request, res = response) => {
    let body = req.body;
    const id = body.id;

    try {
        // Obtener los datos del usuario desde la base de datos
        const usuarioSnapshot = await db.collection('usuario').doc(id).get();
        const userData = usuarioSnapshot.data();
        // Obtener el nombre del usuario
        const nombreUsuario = userData.name;

        let configGmail = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterEspe = nodemailer.createTransport({
            host: 'smtp.espe.edu.ec',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterOutlook = nodemailer.createTransport({
            host: 'smtp.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        // Reemplazar [Nombre del solicitante] con el nombre del usuario
        const correoHTMLPersonalizado = correoHTMLF1A.replace('[Nombre del solicitante]', nombreUsuario);

        const opciones = {
            from: 'Solicitud de becas',
            subject: 'Aceptación de solicitud de beca - Fase 1',
            to: body.email,
            html: correoHTMLPersonalizado
        };

        configGmail.sendMail(opciones, function (error, result) {
            if (error) {
                console.error(error);
                transporterEspe.sendMail(opciones, function (espeError, espeResult) {
                    if (espeError) {
                        console.error(espeError);
                        transporterOutlook.sendMail(opciones, function (outlookError, outlookResult) {
                            if (outlookError) {
                                console.error(outlookError);
                                return res.status(500).json({ error: "Error al enviar el correo" });
                            } else {
                                return res.status(200).json({ message: "Correo enviado correctamente" });
                            }
                        });
                    } else {
                        return res.status(200).json({ message: "Correo enviado correctamente" });
                    }
                });
            } else {
                return res.status(200).json({ message: "Correo enviado correctamente" });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al enviar el correo" });
    }
}


// Método para enviar correo Fase 1- Rechazo de solicitud de beca
const envioCorreoF1R = async (req = request, res = response) => {
    let body = req.body;
    const id = body.id;

    try {
        // Obtener los datos del usuario desde la base de datos
        const usuarioSnapshot = await db.collection('usuario').doc(id).get();
        const userData = usuarioSnapshot.data();

        // Obtener el nombre del usuario
        const nombreUsuario = userData.name;

        let configGmail = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterEspe = nodemailer.createTransport({
            host: 'smtp.espe.edu.ec',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterOutlook = nodemailer.createTransport({
            host: 'smtp.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });

        // Reemplazar [Nombre del solicitante] con el nombre del usuario
        const correoHTMLPersonalizadof1R = correoHTMLF1R.replace('[Nombre del solicitante]', nombreUsuario);

        const opciones = {
            from: 'Solicitud de becas',
            subject: 'Rechazo de solicitud de beca - Fase 1',
            to: body.email,
            html: correoHTMLPersonalizadof1R
        };

        configGmail.sendMail(opciones, function (error, result) {
            if (error) {
                console.error(error);
                transporterEspe.sendMail(opciones, function (espeError, espeResult) {
                    if (espeError) {
                        console.error(espeError);
                        transporterOutlook.sendMail(opciones, function (outlookError, outlookResult) {
                            if (outlookError) {
                                console.error(outlookError);
                                return res.status(500).json({ error: "Error al enviar el correo" });
                            } else {
                                // Elimina la solicitud de la base de datos después de enviar el correo
                                db.collection('usuario').doc(id).delete()
                                    .then(() => {
                                        return res.status(200).json({ message: "Correo enviado y solicitud eliminada correctamente" });
                                    })
                                    .catch((deleteError) => {
                                        console.error(deleteError);
                                        return res.status(500).json({ error: "Error al eliminar la solicitud después de enviar el correo" });
                                    });
                            }
                        });
                    } else {
                        // Elimina la solicitud de la base de datos después de enviar el correo
                        db.collection('usuario').doc(id).delete()
                            .then(() => {
                                return res.status(200).json({ message: "Correo enviado y solicitud eliminada correctamente" });
                            })
                            .catch((deleteError) => {
                                console.error(deleteError);
                                return res.status(500).json({ error: "Error al eliminar la solicitud después de enviar el correo" });
                            });
                    }
                });
            } else {
                // Elimina la solicitud de la base de datos después de enviar el correo
                db.collection('usuario').doc(id).delete()
                    .then(() => {
                        return res.status(200).json({ message: "Correo enviado y solicitud eliminada correctamente" });
                    })
                    .catch((deleteError) => {
                        console.error(deleteError);
                        return res.status(500).json({ error: "Error al eliminar la solicitud después de enviar el correo" });
                    });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al obtener datos del usuario" });
    }
}



// Método para enviar correo Fase 2- Aceptación de solicitud de beca
const envioCorreoF2A = async (req = request, res = response) => {
    let body = req.body;
    const id = body.id;

    try {
        // Obtener los datos del usuario desde la base de datos
        const usuarioSnapshot = await db.collection('usuario').doc(id).get();
        const userData = usuarioSnapshot.data();

        // Obtener el nombre del usuario
        const nombreUsuario = userData.name;

        let config = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterEspe = nodemailer.createTransport({
            host: 'smtp.espe.edu.ec', 
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterOutlook = nodemailer.createTransport({
            host: 'smtp.outlook.com', 
            port: 587,
            secure: false, 
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });

        // Reemplazar [Nombre del solicitante] con el nombre del usuario
        const correoHTMLPersonalizadoF2A = correoHTMLF2A.replace('[Nombre del solicitante]', nombreUsuario);

        const opciones = {
            from: 'Solicitud de becas',
            subject: 'Aceptación de solicitud de beca - Fase 2',
            to: body.email,
            html: correoHTMLPersonalizadoF2A
        };

        config.sendMail(opciones, function (error, result) {
            if (error) {
                console.error(error);
                transporterEspe.sendMail(opciones, function (espeError, espeResult) {
                    if (espeError) {
                        console.error(espeError);
                        transporterOutlook.sendMail(opciones, function (outlookError, outlookResult) {
                            if (outlookError) {
                                console.error(outlookError);
                                return res.status(500).json({ error: "Error al enviar el correo" });
                            } else {
                                return res.status(200).json({ message: "Correo enviado correctamente" });
                            }
                        });
                    } else {
                        return res.status(200).json({ message: "Correo enviado correctamente" });
                    }
                });
            } else {
                return res.status(200).json({ message: "Correo enviado correctamente" });
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al enviar el correo" });
    }
}



// Método para enviar correo Fase 2- Rechazo de solicitud de beca
const envioCorreoF2R = async (req = request, res = response) => {
    let body = req.body;
    const id = body.id;

    try {
        // Obtener los datos del usuario desde la base de datos
        const usuarioSnapshot = await db.collection('usuario').doc(id).get();
        const userData = usuarioSnapshot.data();

        // Obtener el nombre del usuario
        const nombreUsuario = userData.name;

        // Buscar la evaluación correspondiente al usuario por correo electrónico
        const evaluacionSnapshot = await db.collection('evaluacion').where('email', '==', userData.email).get();

        if (!evaluacionSnapshot.empty) {
            // Eliminar la evaluación si existe
            await db.collection('evaluacion').doc(evaluacionSnapshot.docs[0].id).delete();
        }

        let config = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterOutlook = nodemailer.createTransport({
            host: 'smtp.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        let transporterEspe = nodemailer.createTransport({
            host: 'smtp.espe.edu.ec', 
            port: 587,
            secure: false,
            auth: {
                user: 'devspace871@gmail.com',
                pass: 'vyqt dmnc xwqf rqey'
            }
        });
        // Reemplazar [Nombre del solicitante] con el nombre del usuario
        const correoHTMLPersonalizadof2R = correoHTMLF2R.replace('[Nombre del solicitante]', nombreUsuario);

        const opciones = {
            from: 'Solicitud de becas',
            subject: 'Rechazo de solicitud de beca - Fase 2',
            to: body.email,
            html: correoHTMLPersonalizadof2R
        };

        config.sendMail(opciones, async function (error, result) {
            if (error) {
                console.error(error);
                transporterOutlook.sendMail(opciones, async function (outlookError, outlookResult) {
                    if (outlookError) {
                        console.error(outlookError);
                        transporterEspe.sendMail(opciones, async function (espeError, espeResult) {
                            if (espeError) {
                                console.error(espeError);
                                return res.status(500).json({ error: "Error al enviar el correo" });
                            } else {
                                // Elimina el usuario de la base de datos después de enviar el correo
                                try {
                                    await db.collection('usuario').doc(id).delete();
                                    return res.status(200).json({ message: "Correo enviado y usuario eliminado correctamente" });
                                } catch (deleteError) {
                                    console.error(deleteError);
                                    return res.status(500).json({ error: "Error al eliminar el usuario después de enviar el correo" });
                                }
                            }
                        });
                    } else {
                        // Elimina el usuario de la base de datos después de enviar el correo
                        try {
                            await db.collection('usuario').doc(id).delete();
                            return res.status(200).json({ message: "Correo enviado y usuario eliminado correctamente" });
                        } catch (deleteError) {
                            console.error(deleteError);
                            return res.status(500).json({ error: "Error al eliminar el usuario después de enviar el correo" });
                        }
                    }
                });
            } else {
                // Elimina el usuario de la base de datos después de enviar el correo
                try {
                    await db.collection('usuario').doc(id).delete();
                    return res.status(200).json({ message: "Correo enviado y usuario eliminado correctamente" });
                } catch (deleteError) {
                    console.error(deleteError);
                    return res.status(500).json({ error: "Error al eliminar el usuario después de enviar el correo" });
                }
            }
        });        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al enviar el correo" });
    }
}



module.exports = { envioCorreoF1A, envioCorreoF1R, envioCorreoF2A, envioCorreoF2R };