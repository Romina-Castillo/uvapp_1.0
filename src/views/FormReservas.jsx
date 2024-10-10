import { useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const Reservar = () => {
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Verifica si el usuario está logueado
        const username = localStorage.getItem('username');
        if (!username) {
            // Si no está logueado, redirige al login
            navigate('/login');
        }

        // Prellenar el campo de lugar si el parámetro "lugar" está en la URL
        const searchParams = new URLSearchParams(location.search);
        const lugarParam = searchParams.get("lugar");
        if (lugarParam) {
            setValue("lugar", lugarParam); // Prellenar el campo de lugar
        }
    }, [location, setValue]);

    const onSubmit = async (data) => {
        console.log("Datos a enviar:", data); // Depuración

        try {
            const response = await fetch("http://localhost:3001/reservas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Datos de respuesta del servidor:", result); // Depuración

            if (response.ok) {
                console.log("Reserva realizada:", result);
                navigate("/usuarios_reservas");
            } else {
                console.error("Error al realizar la reserva:", result);
                alert(`Error: ${result.message}`); // Mostrar mensaje de error
            }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <Box 
            sx={{  
                padding: "20px", 
            }} 
            component="form" 
            onSubmit={handleSubmit(onSubmit)} 
            className="form-container"
        >
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>Reservar</Typography>
            <Controller
                name="nombre_persona"
                control={control}
                defaultValue=""
                rules={{ required: "El nombre es requerido" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        label="Nombre"
                        {...field}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{ margin: "10px 0" }}
                    />
                )}
            />
            <Controller
                name="lugar"
                control={control}
                defaultValue=""
                rules={{ required: "El lugar es requerido" }}
                render={({ field }) => (
                    <TextField
                        label="Lugar"
                        {...field}
                        InputProps={{
                            readOnly: true, // Hacer que el campo sea de solo lectura
                        }}
                        sx={{ margin: "10px 0" }}
                    />
                )}
            />
            <Controller
                name="fecha_reservacion"
                control={control}
                defaultValue=""
                rules={{ required: "La fecha es requerida" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        label="Fecha de Reservación"
                        type="date"
                        {...field}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{ margin: "10px 0" }}
                    />
                )}
            />
            <Controller
                name="hora"
                control={control}
                defaultValue=""
                rules={{ required: "La hora es requerida" }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        label="Hora"
                        type="time"
                        {...field}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{ margin: "10px 0" }}
                    />
                )}
            />
            <Button type="submit" variant="contained" color="primary">
                Confirmar Reservación
            </Button>
        </Box>
    );
};

export default Reservar;
