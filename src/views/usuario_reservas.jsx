import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const UsuarioReservas = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [reservas, setReservas] = useState([]);  // Estado para las reservas
  const [loading, setLoading] = useState(true);  // Estado para el cargando
  const [error, setError] = useState(null);      // Estado para errores

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const idUsuario = localStorage.getItem('id_usuario'); // Asegúrate de que `id_usuario` se guarda en localStorage

    if (storedUsername && idUsuario) {
      setIsLoggedIn(true);
      setUsername(storedUsername);

      // Hacer la solicitud para obtener las reservas del usuario
      fetch(`http://localhost:3001/reservas/${idUsuario}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener las reservas');
          }
          return response.json();
        })
        .then((data) => {
          setReservas(data);  // Actualizar las reservas con los datos obtenidos
          setLoading(false);  // Dejar de mostrar el estado de carga
        })
        .catch((error) => {
          console.error('Error:', error);
          setError(error.message);
          setLoading(false);
        });
    } else {
    }
  }, [navigate]);

  const renderReservas = () => {
    return reservas.map((reserva, index) => (
      <Box 
        key={index} 
        className="reserva-item" 
        sx={{ 
          backgroundColor: '#f0f0f0', 
          padding: '10px', 
          margin: '10px 0', 
          borderRadius: '8px' 
        }}
      >
        <Typography variant="h6">{reserva.evento}</Typography>
        <Typography>{reserva.fecha}</Typography>
        <Typography>{reserva.lugar}</Typography>
      </Box>
    ));
  };

  const renderNoReservas = () => (
    <Box className="no-reservas-container" style={{ textAlign: 'center', marginTop: '20px' }}>
      <Box 
        component="img" 
        src="/no_reservas.png" 
        alt="Imagen que indica que no hay reservas" 
        className="no-reservas-image" 
        sx={{ width: '150px', height: 'auto', marginBottom: '10px' }}
      />
      <Typography className="no-reservas">
        ¡Parece que no tienes reservas en este momento! 
        <br />
        Explora las bodegas y crea tu primera reserva para disfrutar de una experiencia inolvidable. 🍷✨
      </Typography>
    </Box>
  );

  if (loading) {
    return <Typography>Loading...</Typography>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  if (error) {
    return <Typography>Error: {error}</Typography>; // Mostrar mensaje de error
  }

  return (
    isLoggedIn && (
      <Box sx={{ padding: '20px', textAlign: 'center' }}>
        {/* Bienvenida al usuario */}
        <Typography 
          sx={{ 
            fontSize: '48px', 
            fontWeight: 800, 
            textShadow: '0px 6px 10px rgba(0, 0, 0, 0.3)', 
            marginBottom: '20px' 
          }}
        >
          🍇 ¡Tus reservas, {username}! 🍇
        </Typography>

        {/* Sección de reservas o mensaje de no reservas */}
        <Box className="reservas-container">
          {reservas.length > 0 ? renderReservas() : renderNoReservas()}
        </Box>
      </Box>
    )
  );
};

export default UsuarioReservas;
