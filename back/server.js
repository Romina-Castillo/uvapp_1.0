const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/" , require("./usuarios/rutas/rutas") );

app.listen(3001, () => {
    console.log('Server running on port 3001');
});