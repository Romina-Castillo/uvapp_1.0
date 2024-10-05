import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; 
import { motion } from 'framer-motion'; // Importa Framer Motion

const bodegasData = [
    {
        name: "Bodega Andeluna",
        description: "Una descripción breve de la Andeluna.",
        img: "/img/bodega-andeluna.jpg",
        website: "https://wineobs.com.ar/mro/andeluna"
    },
    {
        name: "Bodega Séptima",
        description: "Una descripción breve de la Bodega Séptima.",
        img: "/img/bodega-septima.jpg",
        website: "https://www.bodegaseptima.com/enoturismo/"
    },
    {
        name: "Bodega Salentein",
        description: "Una descripción breve de la Bodega Salentein.",
        img: "/img/bodega-salentein.jpg",
        website: "https://www.bodegasalentein.com/reservas"
    },
    {
        name: "Bodega Trapiche",
        description: "Una descripción breve de la Bodega Trapiche.",
        img: "/img/bodega-trapiche.jpeg",
        website: "https://trapiche-costaypampa.meitre.com/"
    },
    {
        name: "Bodega Achaval",
        description: "Una descripción breve de la Bodega Achaval-Ferrer.",
        img: "/img/bodega-achaval.jpg",
        website: "https://meitre.com/es/quimera-achaval"
    },
    {
        name: "Bodega Lopez",
        description: "Una descripción breve de la Bodega Lopez.",
        img: "/img/bodega-lopez.jpg",
        website: "https://experiencias.bodegaslopez.com.ar/"
    },
    {
        name: "Casa Vigil",
        description: "Una descripción breve de la Casa Vigil.",
        img: "/img/casa-vigil.jpg",
        website: "https://meitre.com/es/casa-vigil"
    },
    {
        name: "Bodega Luigi Bosca",
        description: "Una descripción breve de la Bodega Luigi Bosca.",
        img: "/img/bodega-luigibosca.jpg",
        website: "https://luigibosca.com/experiencias/"
    },
    {
        name: "Bodega Chandon",
        description: "Una descripción breve de la Bodega Chandon.",
        img: "/img/Bodega-Chandon.jpg",
        website: "https://www.chandon.com.ar/nuestra-bodega/"
    }
];

const Bodegas = () => {
    return (
        <>
            <Grid
                container
                spacing={3}
                sx={{ mt: 10 }}
            >
                {bodegasData.map((bodega, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        key={index}
                    >
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
                                        href={bodega.website}
                                        target="_blank"
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
            <Grid
                container
                justifyContent="center"
                sx={{ mt: 5 }}
            >
            {/* boton de pagina siguiente */}
                <Button
                    variant="outlined"
                    component={Link}
                    to="/pagina2"
                    sx={{
                        backgroundColor: "white", // Fondo blanco
                        color: "black",           // Texto negro
                        borderColor: "rgb(185, 171, 25)",     // Borde oliva 
                        '&:hover': {
                            backgroundColor: "rgb(185, 171, 25)", // Fondo negro al pasar el mouse
                            color: "white",           // Texto blanco al pasar el mouse
                        },
                        padding: "10px 20px",        // más espacio en el botón
                    }}
                >
                    Siguiente página
                </Button>
            </Grid>
        </>
    );
};

export default Bodegas;
