const express = require('express');
const app = express();

let envio = require('../Controllers/correoControler');

app.post('/envioF1A', envio.envioCorreoF1A);
app.post('/envioF1R', envio.envioCorreoF1R);

module.exports = app;