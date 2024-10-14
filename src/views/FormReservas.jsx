import { useEffect, useState } from "react";
import { TextField, Button, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const Reservar = () => {
    const { control, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [openDialog, setOpenDialog] = useState(false);
    const [reservationData, setReservationData] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) {
            navigate('/login');
        }

        const searchParams = new URLSearchParams(location.search);
        const lugarParam = searchParams.get("lugar");
        if (lugarParam) {
            setValue("lugar", lugarParam);
        }
    }, [location, setValue, navigate]);

    const onSubmit = (data) => {
        setReservationData(data);
        setOpenDialog(true);
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
                            readOnly: true,
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

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmar Reservación</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        ¿Está seguro de que desea confirmar la reserva para {reservationData?.nombre_persona} en {reservationData?.lugar}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        No
                    </Button>
                    <Button 
                        onClick={async () => {
                            try {
                                const response = await fetch("http://localhost:3001/reservas", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(reservationData),
                                });

                                // Manejar la respuesta solo una vez
                                const textResponse = await response.text(); // Primero, obtén el texto
                                let result;

                                try {
                                    result = JSON.parse(textResponse); // Intenta parsear el texto como JSON
                                } catch (e) {
                                    result = { message: textResponse }; // Si no puede, almacena el texto
                                }

                                if (response.ok) {
                                    console.log("Reserva realizada:", result);
                                    setSnackbarMessage("Reserva confirmada");
                                    setOpenSnackbar(true);
                                    setTimeout(() => {
                                        navigate("/usuario_reservas");
                                    }, 2000);
                                } else {
                                    console.error("Error al realizar la reserva:", result);
                                    setSnackbarMessage(`Error: ${result.message}`);
                                    setOpenSnackbar(true);
                                }
                            } catch (error) {
                                console.error("Error en la solicitud:", error);
                                setSnackbarMessage("Error en la solicitud");
                                setOpenSnackbar(true);
                            }
                            setOpenDialog(false);
                        }} 
                        color="primary"
                    >
                        Sí
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
                message={snackbarMessage}
                autoHideDuration={3000}
            />
        </Box>
    );
};

export default Reservar;
