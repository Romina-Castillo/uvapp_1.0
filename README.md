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
npm run dev
(NO OLVIDARSE DE CAMBIAR LA CONTRASEÑA DE TU BD EN EL "db.js")
Paso 3°: Ejecutar el front
npm run dev(en otra consola)
