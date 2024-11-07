// vista detalle de cada bodega, eventos, etc.

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";

const InfoCard = ({ data }) => {
    const navigate = useNavigate();
    
    // Cargar la API de Google Maps
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const handleReserveClick = () => {
        if (data.website) {
            window.open(data.website, "_blank");
        } else if (data.route) {
            navigate("/formReservas", { state: { lugar: data.name } });
        } else {
            console.error("No hay información disponible para redirigir.");
        }
    };

    return (
        <Card sx={{
            backgroundColor: '#c0c0c0',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginTop: '120px',
            '&:hover': {
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out'
            }
        }}>
            <CardMedia
                component="img"
                height="300"
                image={data.img}
                alt={data.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                    {data.description}
                </Typography>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '200px', marginTop: '20px' }}
                        center={data.location}
                        zoom={15}
                    >
                        <Marker position={data.location} />
                    </GoogleMap>
                ) : (
                    <p>Cargando el mapa...</p>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleReserveClick}
                    sx={{ mt: 3 }}
                >
                    Reservar
                </Button>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
