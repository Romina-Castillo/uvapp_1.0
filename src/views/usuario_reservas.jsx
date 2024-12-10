import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import './usuario_reservas.css';

const UsuarioReservas = () => {
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

    const renderReservas = () => {
        return reservas.map((reserva, index) => (
            <Box key={index} className="reserva-item" textAlign="center">
                <Typography variant="h6">{reserva.evento}</Typography>
                <Typography>{reserva.fecha}</Typography>
            </Box>
        ));
    };

    const renderNoReservas = () => (
        <Box 
            className="no-reservas-container" 
            style={{ textAlign: 'center', marginTop: '10px' }}
        >
            <Box 
                component="img" 
                src="/public/no_reservas.png" 
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

    return (
        isLoggedIn && (
            <Grid container className="background" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={8} lg={7}>
                    <Box textAlign="center">
                        {/* Bienvenida al usuario */}
                        <Typography 
                            className="welcome-header" 
                            style={{ fontSize: '48px', fontWeight: 800, textShadow: '0px 6px 10px rgb(0, 0, 0)' }}
                        >
                            🍇 Tus reservas, {username}! 🍇
                        </Typography>

                        {/* Sección Tus Reservas */}
                        <Box className="reservas-container">
                            {reservas.length > 0 ? renderReservas() : renderNoReservas()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    );
};

export default UsuarioReservas;
