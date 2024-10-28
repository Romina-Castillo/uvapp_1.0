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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        const lugarParam = location.state?.lugar; // Obtener lugar desde el estado
        if (lugarParam) {
            setValue("lugar", lugarParam);
        }
    }, [location.state, setValue]);

    const onSubmit = (data) => {
        setReservationData(data);
        setOpenDialog(true); // Asegúrate de que este diálogo muestre la información esperada.
    };

    return (
        <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'absolute', 
        width: '400px', // Puedes ajustar el tamaño según sea necesario
        height: '480px', // Cambia este valor si deseas un tamaño cuadrado
        padding: "40px",
        borderRadius: "15px", 
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)', 
        margin: 'auto', // Centra el Box en la página
        position: 'relative', // Asegura que el Box se coloque correctamente en la página
        top: '50%', 
        transform: 'translateY(-50%)', 
        marginTop: '30px', 
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
                sx={{
                    margin: "10px 0",
                    backgroundColor: 'white', // Color de fondo blanco
                    borderRadius: '5px', // Opcional: para esquinas redondeadas
                }}
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
                sx={{
                    margin: "10px 0",
                    backgroundColor: 'white', // Color de fondo blanco
                    borderRadius: '5px', // Opcional: para esquinas redondeadas
                }}
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
                sx={{
                    margin: "10px 0",
                    backgroundColor: 'white', // Color de fondo blanco
                    borderRadius: '5px', // Opcional: para esquinas redondeadas
                }}
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
                sx={{
                    margin: "10px 0",
                    backgroundColor: 'white', // Color de fondo blanco
                    borderRadius: '5px', // Opcional: para esquinas redondeadas
                }}
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
                            setLoading(true);
                            console.log("Datos de reserva enviados:", reservationData); // Agregar log para depuración
                            try {
                                const response = await fetch("http://localhost:3001/reservas", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(reservationData),
                                });

                                const textResponse = await response.text();
                                let result;

                                try {
                                    result = JSON.parse(textResponse);
                                } catch (e) {
                                    result = { message: textResponse };
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
                            } finally {
                                setLoading(false);
                                setOpenDialog(false);
                            }
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
