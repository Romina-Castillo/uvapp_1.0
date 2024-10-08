// src/Transicciones.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Transicciones = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }} // Movimiento hacia arriba y ligera rotación
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} // Aparecer sin escalado
      exit={{ opacity: 0, y: 20, scale: 0.95, rotate: -2 }} // Salir suavemente
      transition={{ duration: 0.5, ease: "easeInOut" }} // Duración más sutil
      style={{ width: '100%', height: '100%', borderRadius: '10px', padding: '20px' }} // Fondo blanco más transparente
    >
      {children}
    </motion.div>
  );
};

export default Transicciones;
