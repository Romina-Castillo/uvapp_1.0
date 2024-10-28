import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const InfoCard = ({ data }) => {
    const navigate = useNavigate();

    if (!data) {
        return <Typography variant="h6">Información no disponible</Typography>;
    }

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
        <Card sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
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
