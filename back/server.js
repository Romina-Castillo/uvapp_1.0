const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const rutas = require('./usuarios/rutas/rutas'); // Importa las rutas

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use("/", rutas )   // Rutas de Login, Register y Reseras estan en el mismo archivo de rutas

// Conexion con el servidor
app.listen(3001, () => {
    console.log('Server running on port 3001');
});
