const express = require('express');
const { FieldValue } = require('firebase-admin/firestore');
const app = express();
const port = 3000;
const { db } = require('../firebase.js');

app.use(express.json());

let envio = require('../Controllers/correoControler');

app.post('/envioF1A', envio.envioCorreoF1A);
app.post('/envioF1R', envio.envioCorreoF1R);

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





// Agregar un nuevo documento a la colección de usuarios
app.post('/usuarios', async (req, res) => {
    try {
        const nuevoUsuario = req.body; 
        const respuesta = await db.collection('usuario').add(nuevoUsuario);
        res.status(201).send({ id: respuesta.id }); 
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al agregar el nuevo usuario" });
    }
});



module.exports = app;
