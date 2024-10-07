import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Importa Framer Motion

const bodegasData2 = [
    {
        name: "AVA S.A.",
        description: "Una descripción breve de la Conservera AVA.",
        img: "/img/ava.png",
    },
];

const Bodegas2 = () => {
    return (
        <>
            <Grid container spacing={3} sx={{ mt: 10 }}>
                {bodegasData2.map((bodega, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Inicialmente oculta y desplazada
                            animate={{ opacity: 1, y: 0 }} // Se muestra y se desplaza hacia su posición original
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Retraso basado en el índice
                        >
                            <Card
                                sx={{
                                    '&:hover': {
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)', // Sombra al pasar el mouse
                                        transform: 'scale(1.05)', // Escalado al pasar el mouse
                                        transition: 'transform 0.3s ease-in-out', // Transición suave
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={bodega.img}
                                    alt={bodega.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {bodega.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {bodega.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        to={`/FormReservas?lugar=${bodega.name}`} // Pasar el nombre de la bodega a la página de reservas
                                        sx={{ mt: 2 }}
                                    >
                                        Reservar
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 5 }}>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/bodegas"
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        borderColor: "rgb(185, 171, 25)",
                        '&:hover': {
                            backgroundColor: "rgb(185, 171, 25)",
                            color: "white",
                        },
                        padding: "10px 20px",
                    }}
                >
                    Página Anterior
                </Button>
            </Grid>
        </>
    );
};

export default Bodegas2;
