import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const InfoCard = ({ data }) => {
    // Verifica si se ha pasado el `data` y muestra un mensaje si no está disponible
    if (!data) {
        return <Typography variant="h6">Información no disponible</Typography>;
    }

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
                {data.website && (
                    <Button
                        variant="contained"
                        color="primary"
                        href={data.website}
                        target="_blank"
                        sx={{ mt: 3 }}
                    >
                        Reservar
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default InfoCard;
