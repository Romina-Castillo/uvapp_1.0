import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './usuario.css';

const Usuario = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  const reservas = []; // Aquí deberías traer las reservas del usuario

  return (
    isLoggedIn && (
      <Box className="background">
        <Box className="navbar">
        </Box>

        {/* Bienvenida al usuario */}
        <Typography 
            className="welcome-header" 
            style={{ fontSize: '48px', fontWeight: 800, textShadow: '0px 6px 10px rgb(0, 0, 0)' }}
        >
            Bienvenido/a, {username}!
        </Typography>


        {/* Sección Tus Reservas */}
        <Box className="reservas-container">
          <Typography variant="h5">Tus Reservas</Typography>
          {reservas.length > 0 ? (
            reservas.map((reserva, index) => (
              <Box key={index} className="reserva-item">
                <Typography variant="h6">{reserva.evento}</Typography>
                <Typography>{reserva.fecha}</Typography>
              </Box>
            ))
          ) : (
            <Typography className="no-reservas">No tienes reservas</Typography>
          )}
        </Box>
      </Box>
    )
  );
};

export default Usuario;
