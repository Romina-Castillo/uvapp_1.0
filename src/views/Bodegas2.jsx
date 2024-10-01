import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

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
                        <Card>
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
                                    to={`/FormReservas?lugar=${bodega.name}`} // Pasar el nombre de la bodega a la pag de reservar, fijardo en el campo de lugar
                                    sx={{ mt: 2 }}
                                >
                                    Reservar
                                </Button>
                            </CardContent>
                        </Card>
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
