// vista detalle de cada bodega, eventos, etc.

import { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import { useNavigate } from "react-router-dom";

// Corregir el problema de los íconos predeterminados de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const InfoCard = ({ data }) => {
    const navigate = useNavigate();

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
                <MapContainer
                    center={data.location}
                    zoom={15}
                    style={{ width: '100%', height: '200px', marginTop: '20px' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={data.location}>
                        <Popup>{data.name}</Popup>
                    </Marker>
                </MapContainer>
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
