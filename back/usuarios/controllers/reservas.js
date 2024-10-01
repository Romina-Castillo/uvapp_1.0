const db = require('../../database/db');

exports.crearReserva = (req, res) => {
    const { fecha_reservacion, lugar, hora, nombre_persona } = req.body;
    console.log('Datos de la reserva:', req.body); // Imprimir los datos de la reserva en la terminal para ver que este funcionando

    const sql = 'INSERT INTO reservas (nombre_persona, lugar, fecha_reservacion, hora) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre_persona, lugar, fecha_reservacion, hora], (err, result) => {
        if (err) {
            console.error('Error al realizar la reserva:', err); // Verifica si ocurre un error aquí
            res.status(500).send('Error al realizar la reserva');
        } else {
            res.status(200).send('Reserva realizada exitosamente');
        }
    });
    }