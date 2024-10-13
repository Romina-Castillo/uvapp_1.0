import React from 'react';
import { useParams } from 'react-router-dom';
import { bodegasData } from './Bodegas'; // Ajusta la ruta según tu estructura de carpetas
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { bodegasData } from '../../views/Bodegas.jsx';

const BodegaCard = () => {
    const { name } = useParams();
    // Busca la bodega que coincide con el nombre en la URL
    const bodega = bodegasData.find(b => b.route.split('/').pop().toLowerCase() === name.toLowerCase());

    // Si no se encuentra la bodega, puedes mostrar un mensaje de error o redirigir
    if (!bodega) {
        return <Typography variant="h6">Bodega no encontrada</Typography>;
    }

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
            <CardMedia
                component="img"
                height="300"
                image={bodega.img}
                alt={bodega.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {bodega.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                    {bodega.description}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    href={bodega.website}
                    target="_blank"
                    sx={{ mt: 3 }}
                >
                    Visitar Website
                </Button>
            </CardContent>
        </Card>
    );
};

export default BodegaCard;
