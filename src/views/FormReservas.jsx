import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Reservar = () => {
    const [nombrePersona, setNombrePersona] = useState("");
    const [lugar, setLugar] = useState("");
    const [fechaReservacion, setFechaReservacion] = useState("");
    const [hora, setHora] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lugarParam = searchParams.get("lugar");
        if (lugarParam) {
            setLugar(lugarParam); // Prellenar el campo de lugar
        }
    }, [location]);

const handleSubmit = async (event) => {
    event.preventDefault();
    const reserva = {
        nombre_persona: nombrePersona,
        lugar,
        fecha_reservacion: fechaReservacion,
        hora,
    };

    try {
        const response = await fetch("http://localhost:3001/reservas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reserva),
        });

        const data = await response.json();
        console.log("Datos de respuesta del servidor:", data); // Agregar esta línea para depurar

        if (response.ok) {
            console.log("Reserva realizada:", data);
            navigate("/bodegas");
        } else {
            console.error("Error al realizar la reserva:", data);
            alert(`Error: ${data}`); // Mostrar mensaje de error al usuario
        }

    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
};

    return (
        <Box sx={{ padding: "20px" }} component="form" className="form-container" >
            <Typography variant="h4">Reservar</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    value={nombrePersona} // Campo para el nombre de la persona
                    onChange={(e) => setNombrePersona(e.target.value)}
                    required
                    sx={{ margin: "10px 0" }}
                />
                <TextField
                    label="Lugar"
                    value={lugar} // Campo prellenado con el lugar
                    onChange={(e) => setLugar(e.target.value)} // Permitir cambios si es necesario
                    required
                    sx={{ margin: "10px 0" }}
                    InputProps={{
                        readOnly: true, // Hacer que el campo sea de solo lectura
                    }}
                />
                <TextField
                    label="Fecha de Reservación"
                    type="date"
                    value={fechaReservacion}
                    onChange={(e) => setFechaReservacion(e.target.value)}
                    required
                    sx={{ margin: "10px 0" }}
                />
                
                <TextField
                    label="Hora"
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                    sx={{ margin: "10px 0" }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Confirmar Reservación
                </Button>
            </form>
        </Box>
    );
};

export default Reservar;