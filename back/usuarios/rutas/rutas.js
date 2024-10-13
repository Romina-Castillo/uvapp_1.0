const express = require('express');
const router = express.Router();


const controllersUsuarios = require("../controllers/controles");

const controllersReservas = require("../controllers/reservas");


router.post('/login', controllersUsuarios.login);

router.post('/register',controllersUsuarios.register);

router.post('/reservas', controllersReservas.crearReserva);

router.post('/reservas', controllersReservas.obtenerReservasPorUsuario);

module.exports = router;