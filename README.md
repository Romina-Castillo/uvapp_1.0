PASOS
Paso 1°: Crear la base de datos
CREATE DATABASE uvapp;
CREATE TABLE usuario (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(25),
    email VARCHAR(45),
    contraseña VARCHAR(255)
);
Paso 2°: Ejecutar el back
cd back
npm install (para que instale todo lo de package.json del back)
npm run dev
(NO OLVIDARSE DE CAMBIAR LA CONTRASEÑA DE TU BD EN EL "db.js")
Paso 3°: Ejecutar el front
npm run dev(en otra consola)

reservas!
npm install react-hook-form                 // en el front

back: cree otro archivo controllers/reservas para la conexion lo hice aparte para no romper nada de login o register, despues lo pondre todo junto.

tabla de reservas en la misma bd uvapp
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_persona VARCHAR(255) NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    fecha_reservacion DATE NOT NULL,
    hora TIME NOT NULL
);

en la terminal del back pueden ver los datos ingresados al igual que si ocurre un error en la confirmación de la reserva


