// vista detalle de cada bodega, eventos, etc.

import React, { useEffect, useRef } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";

// Define libraries outside the component to avoid reloading issues
const libraries = ["marker"];

const InfoCard = ({ data }) => {
    const navigate = useNavigate();
    const mapRef = useRef(null); // Ref for the Google Map container
    const markerRef = useRef(null); // Ref for the Advanced Marker

    // Load the Google Maps API
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        id: "DEMO_MAP_ID",
        libraries,  // Use the constant libraries array
    });
    
    // Initialize the AdvancedMarkerElement when the map loads
    useEffect(() => {
        if (isLoaded && mapRef.current) {
            const map = new google.maps.Map(mapRef.current, {
                zoom: 15,
                center: data.location,
                mapId: "DEMO_MAP_ID",
            });
    
            // Check if AdvancedMarkerElement is available before using it
            if (google?.maps?.marker?.AdvancedMarkerElement) {
                markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: data.location,
                    title: data.name,
                });
            } else {
                console.warn("AdvancedMarkerElement no está disponible. Verifica si la API está correctamente configurada.");
            }
        }
    }, [isLoaded, data.location, data.name]);
    
    const handleReserveClick = () => {
        if (data.website) {
            window.open(data.website, "_blank");
        } else if (data.route) {
            navigate("/formReservas", { state: { lugar: data.name } });
        } else {
            console.error("No hay información disponible para redirigir.");
        }
    };

    if (loadError) {
        console.error("Error cargando Google Maps: ", loadError);
        return <p>Error cargando mapa</p>;
    }

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
                    <div
                        ref={mapRef}
                        style={{ width: '100%', height: '200px', marginTop: '20px' }}
                    />
                ) : (
                    <p>Cargando mapa...</p>
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
