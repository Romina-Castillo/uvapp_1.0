import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const InfoCard = ({ data }) => {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        console.log("Data:", data); // Muestra la data en la consola
        if (data.website) {
            console.log("Redirigiendo a:", data.website);
            window.open(data.website, "_blank"); // Abre el sitio web en una nueva pestaña

        } else if (data.route) {
            console.log("Abriendo sitio web:", data.route);
            navigate("/formReservas", { state: { lugar: data.name } }); // redirije al formulario
        } else {
            console.error("No hay información disponible para redirigir.");
        }
    };

    return (
        <Card sx={{ 
            backgroundColor: '#c0c0c0', // Color de fondo suave para la tarjeta
            border: '1px solid #e0e0e0', // Borde sutil
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra normal
            marginTop: '120px', // Espacio de separación superior
            '&:hover': { 
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)', 
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out' 
            } 
        }}        
    >
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        handleReserveClick();
                    }}
                    sx={{ mt: 3 }}
                >
                    Reservar
                </Button>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
