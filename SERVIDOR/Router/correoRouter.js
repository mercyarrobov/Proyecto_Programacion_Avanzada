const express = require('express');
const { FieldValue } = require('firebase-admin/firestore');
const app = express();
const port = 3000;
const { db } = require('../firebase.js');

app.use(express.json());

let envio = require('../Controllers/correoControler');

app.post('/envioF1A', envio.envioCorreoF1A);
app.post('/envioF1R', envio.envioCorreoF1R);
app.post('/envioF2A', envio.envioCorreoF2A);
app.post('/envioF2R', envio.envioCorreoF2R);

// Listar todas las solicitudes de usuarios f1
app.get('/solicitud', async (req, res) => {
    try {
        const usuariosSnapshot = await db.collection('usuario').get();
        const usuarios = [];
        usuariosSnapshot.forEach(doc => {
            usuarios.push({
                id: doc.id,
                data: doc.data()
            });
        });
        res.status(200).send(usuarios);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});

// Listar todas las evaluaciones de usuarios f1
app.get('/evaluacion', async (req, res) => {
    try {
        const evaluacionesSnapshot = await db.collection('evaluacion').get();
        const evaluaciones = [];

        // Iterar sobre cada evaluación
        for (const doc of evaluacionesSnapshot.docs) {
            const evaluacionData = doc.data();
            const usuarioDoc = await db.collection('usuario').doc(evaluacionData.userId).get(); 
            const userData = usuarioDoc.data(); // Datos del usuario

            // Agregar los datos del usuario a la evaluación
            evaluaciones.push({
                id: doc.id,
                data: {
                    ...evaluacionData,
                    usuario: {
                        nombre: userData.name,
                        correo: userData.email,
                        cedula: userData.cedula,
                        telefono: userData.telefono
                    }
                }
            });
        }

        res.status(200).send(evaluaciones);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});



//codigo del servidor
// Agregar un nuevo documento a la colección de usuarios en firebase Cloud Firestore
app.post('/usuarios', async (req, res) => {
    try {
        const nuevoUsuario = req.body; 

        // Verificar si la cédula ya existe
        const cedulaExistente = await db.collection('usuario').where('cedula', '==', nuevoUsuario.cedula).get();
        if (!cedulaExistente.empty) {
            return res.status(400).json({ error: "La cédula ya está registrada" });
        }

        // Verificar si el correo electrónico ya existe
        const correoExistente = await db.collection('usuario').where('email', '==', nuevoUsuario.email).get();
        if (!correoExistente.empty) {
            return res.status(400).json({ error: "El correo electrónico ya está registrado" });
        }

        const respuesta = await db.collection('usuario').add(nuevoUsuario);
        res.status(201).send({ id: respuesta.id }); 
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al registrar solicitud" });
    }
});


// Verificar la existencia de una cédula
app.get('/verificar-cedula/:cedula', async (req, res) => {
    try {
        const cedulaExistente = await db.collection('usuario').where('cedula', '==', req.params.cedula).get();
        res.json(!cedulaExistente.empty);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al verificar la cédula" });
    }
});

// Verificar la existencia de un correo electrónico
app.get('/verificar-email/:email', async (req, res) => {
    try {
        const correoExistente = await db.collection('usuario').where('email', '==', req.params.email).get();
        res.json(!correoExistente.empty);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al verificar el correo electrónico" });
    }
});




module.exports = app;
