const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '43544580', // cambiar nuevamente a tu contraseña de MySQL
    database: 'uvapp',
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


module.exports = db;


