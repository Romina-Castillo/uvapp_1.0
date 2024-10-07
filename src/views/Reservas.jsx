import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const VistaReservas = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Verificamos si el usuario está logueado
  const userId = localStorage.getItem('userId'); // Recuperar el id del usuario
  const [reservas, setReservas] = useState([]); // Estado para almacenar las reservas
  const [loading, setLoading] = useState(true); // Estado de carga para mostrar un indicador mientras se obtienen las reservas

  useEffect(() => {
    console.log("userId:", userId); // Verifica que userId no sea null o undefined
    // si el usuario no se ha logueado redirige al login
    if (!username) {
      navigate('/login');
    } else {
      // Obtener las reservas del usuario
      fetch(`http://localhost:3001/reservas/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener reservas");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Reservas obtenidas (estructura):", data);
          setReservas(data); // Verifica si necesitas modificar esto dependiendo de la estructura
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al obtener reservas:", error);
          setLoading(false);
        });
    }
  }, [username, navigate, userId]);


  // Mostrar un indicador de carga mientras se obtienen las reservas
  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6">Cargando reservas...</Typography>
      </Box>
    );
  }

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
              <Typography variant="h6">{reserva.lugar}</Typography>
              <Typography variant="body1">
                {reserva.fecha_reservacion} - {reserva.hora}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No tienes reservas</Typography>
        )}

        {/* Mostrar las reservas temporalmente en formato JSON para depurar */}
        <pre>{JSON.stringify(reservas, null, 2)}</pre>

      </Box>

      {/* Footer */}
      <Box position="fixed" bottom={0} width="100%">
        {/* Reutiliza tu footer aquí */}
      </Box>
    </Box>
  );
};

export default VistaReservas;
