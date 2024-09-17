const db = require('../../database/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const data  = req.body;
    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(data.password, 10);
    console.log (data);

    const sql = 'INSERT INTO usuario (nombreUsuario, email, contraseña) VALUES (?, ?, ?)';
    db.query(sql, [data.username, data.email, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            res.status(500).send('Error al registrar usuario');
        } else {
            res.status(200).send('Usuario registrado exitosamente');
            console.log('User registered successfully:', result);
        }
    });
}

exports.login = async (req, res) => {
    const data = req.body;
    console.log(data);

    // Verificar si el usuario existe en la base de datos por su email
    const sql = 'SELECT * FROM usuario WHERE email = ?';
    db.query(sql, [data.email], async (err, results) => {
        if (err) {
            console.error('Error finding user in the database:', err);
            res.status(500).send('Error en el servidor');
        } else if (results.length === 0) {
            // Si no se encuentra el email, se responde con un error
            res.status(401).send({ message: 'Email o contraseña incorrectos' });
        } else {
            const user = results[0];

            // Comparar la contraseña ingresada con la almacenada (hasheada)
            const match = await bcrypt.compare(data.password, user.contraseña);
            if (match) {
                // Si la contraseña es correcta, se responde con éxito
                return res.status(200).json({ message: 'Inicio de sesión exitoso', username: user.nombreUsuario });
            } else {
                // Si la contraseña es incorrecta, se responde con error
                res.status(401).send({ message: 'Email o contraseña incorrectos' });
            }
        }
    });
};
