import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const VistaReservas = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Verificamos si el usuario está logueado
  const reservas = []; // Aquí deberías traer las reservas del usuario

  useEffect(() => {
    // Si no hay un usuario logueado, redirigir al login
    if (!username) {
      navigate('/login');
    }
  }, [username, navigate]);

  // Si el usuario no está logueado, la vista no se mostrará debido a la redirección
  return (
    <Box>
      {/* Barra Superior */}
      <Box>
        {/* Reutiliza tu barra de navegación aquí */}
      </Box>

      {/* Bienvenida al usuario */}
      <Box mt={4} textAlign="center">
        <Typography variant="h4">Bienvenid@, {username}!</Typography>
      </Box>

      {/* Sección Tus Reservas */}
      <Box mt={4} p={2}>
        <Typography variant="h5">Tus Reservas</Typography>
        {reservas.length > 0 ? (
          reservas.map((reserva, index) => (
            <Box key={index} p={2} my={2} border={1}>
              <Typography variant="h6">{reserva.evento}</Typography>
              <Typography variant="body1">{reserva.fecha}</Typography>
            </Box>
          ))
        ) : (
          <Typography>No tienes reservas</Typography>
        )}
      </Box>

      {/* Footer */}
      <Box position="fixed" bottom={0} width="100%">
        {/* Reutiliza tu footer aquí */}
      </Box>
    </Box>
  );
};

export default VistaReservas;
