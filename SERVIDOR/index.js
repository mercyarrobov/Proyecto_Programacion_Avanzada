const express = require('express');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors()); //Se importa los cors para el acceso de peticiones 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(require('./Router/correoRouter'));

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
