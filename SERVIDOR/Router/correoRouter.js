const express = require('express');
const { FieldValue } = require('firebase-admin/firestore');
const app = express();
const port = 3000;
const { db } = require('../firebase.js');

app.use(express.json());

let envio = require('../Controllers/correoControler');
//Metodos de envio 
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

            // Obtener el usuario correspondiente a esta evaluación
            const usuarioSnapshot = await db.collection('usuario').where('email', '==', evaluacionData.email).get();
            if (usuarioSnapshot.empty) {
                console.error('No se encontró el usuario correspondiente para la evaluación con ID:', doc.id);
                continue; // Continuar con la siguiente evaluación
            }
            
            const userData = usuarioSnapshot.docs[0].data(); // Tomar el primer usuario encontrado (debería ser único)
            const userId = usuarioSnapshot.docs[0].id; // Obtener el ID del usuario

            // Agregar los datos del usuario a la evaluación
            evaluaciones.push({
                id: doc.id,
                data: {
                    ...evaluacionData,
                    usuario: {
                        id: userId,
                        nombre: userData.name,
                        correo: userData.email,
                    },
                    evaluacion: {
                        pregunta1: evaluacionData.question1Text,
                        pregunta2: evaluacionData.question2Text,
                        pregunta3: evaluacionData.question3Text,
                        pregunta4: evaluacionData.question4Text,
                        pregunta5: evaluacionData.ejercicio,
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


//Eliminar una solicitud de usuario
app.delete('/eliminarSolicitud/:id', async (req, res) => {
    const id = req.params.id;
    //Se controla los errores mediante el try-catch
    try {
        // Eliminar la solicitud de la base de datos
        await db.collection('usuario').doc(id).delete();
        return res.status(200).json({ message: "Solicitud eliminada correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al eliminar la solicitud" });
    }
});

//Eliminar evaluacion
/* app.delete('/eliminarEvaluacion/:id', async (req, res) => {
    const id = req.params.id;

    try {
        // Obtener el correo electrónico del usuario
        const usuarioSnapshot = await db.collection('usuario').doc(id).get();
        const userData = usuarioSnapshot.data();
        const userEmail = userData.email;

        // Buscar la evaluación asociada al correo electrónico del usuario
        const evaluacionSnapshot = await db.collection('evaluacion').where('email', '==', userEmail).get();

        if (!evaluacionSnapshot.empty) {
            // Si se encuentra una evaluación asociada, eliminarla
            await db.collection('evaluacion').doc(evaluacionSnapshot.docs[0].id).delete();
        }

        // Eliminar la solicitud de usuario
        await db.collection('usuario').doc(id).delete();
        
        return res.status(200).json({ message: "Solicitud y evaluación asociada eliminadas correctamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al eliminar la solicitud y la evaluación asociada" });
    }
}); */


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


// Agregar un nuevo documento a la colección de evaluaciones
app.post('/evaluaciones', async (req, res) => {
    try {
        const nuevaEvaluacion = req.body; 

        // Verificar si el correo electrónico ya existe en la colección de usuarios
        const correoExistente = await db.collection('usuario').where('email', '==', nuevaEvaluacion.email).get();
        if (correoExistente.empty) {
            return res.status(400).json({ error: "El correo electrónico no está registrado" });
        }

        // Verificar si el correo electrónico ya existe en la colección de evaluaciones
        const correoExistenteEvaluacion = await db.collection('evaluacion').where('email', '==', nuevaEvaluacion.email).get();
        if (!correoExistenteEvaluacion.empty) {
            return res.status(400).json({ error: "Este usuario ya rindió la evaluación" });
        }

        const respuesta = await db.collection('evaluacion').add(nuevaEvaluacion);
        res.status(201).send({ id: respuesta.id }); 
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al agregar la nueva evaluación" });
    }
});


// Verificar la existencia de un correo electrónico
app.get('/verificar-email-evaluacion/:email', async (req, res) => {
    try {
        const correoExistenteEvaluacion = await db.collection('evaluacion').where('email', '==', req.params.email).get();
        res.json(!correoExistenteEvaluacion.empty);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Error al verificar el correo electrónico" });
    }
});


module.exports = app;
