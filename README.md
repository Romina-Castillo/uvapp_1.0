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

Dependencias a descargar
npm install rect-responsive-carousel        // en front carrusel
npm install emailjs-com                     // en back emailjs para recibir mensajes

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

en la terminal del back pueden ver los datos ingresados en el formulario al igual que si ocurre un error en la confirmación de la reserva

transiciones!
npm install framer-motion   //en el front

jsonwebtoken en back
npm install jsonwebtoken

lo instale pero todavia no lo implemente, es para el tema de verificaciones

NOVIEMBRE
en cd back 

dotenv!
npm install dotenv

crea el archivo   .env    en back

mapas!
https://react-leaflet.js.org/docs/start-introduction/ -> documentacion

npm install leaflet react-leaflet           //instala leaflet y leaflet para react
npm install leaflet@latest                  // estilos de leaflet

cualquier cosa pone cd back, despues npm install y de ahi recien npm run dev
y en el front primero npm install y recien el npm run dev

función de cargar: spinner!
npm install @mui/material @emotion/react @emotion/styled
FEBRERO
Instalación Vitest: npm install --save-dev vitest @vitest/ui
Instalación de React Testing Library: npm install --save-dev @testing-library/react @testing-library/jest-dom

