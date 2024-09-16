const express = require('express');
const router = express.Router();


const controllersUsuarios = require("../controllers/controles");


router.post('/login', controllersUsuarios.login);

router.post('/register',controllersUsuarios.register);


module.exports = router;