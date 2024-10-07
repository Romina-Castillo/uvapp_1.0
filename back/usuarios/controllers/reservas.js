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

// Controlador para obtener reservas por id_usuario
exports.obtenerReservasPorUsuario = (req, res) => {
    const { id } = req.params; // El ID del usuario desde los parámetros de la ruta
  
    const sql = 'SELECT * FROM reservas WHERE id_usuario = ?'; // Filtrar por id_usuario
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al obtener las reservas:', err);
        res.status(500).json({ message: 'Error al obtener las reservas' });
      } else {
        console.log("Reservas encontradas:", result); // Verifica qué datos está devolviendo la base de datos
        res.status(200).json(result); // Devolver las reservas
      }
    });
  };
  