import { Container, Button, Box, Typography, Grid, Card, CardContent, CardMedia, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import { styled } from "@mui/system";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Background = styled("div")({
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "3vh", // Ajuste del fondo de pantalla
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(/Compuertas-Mendoza.jpg)`, // Verifica la ruta de la imagen
});

const StyledBox = styled(Box)({
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "10px",
    margin: "0 auto",
});

const HeaderBox = styled(StyledBox)({
    backgroundColor: "rgba(145, 65, 76, 0.7)", // Color bordo transparente
    color: "white",
});

const TrendBox = styled(Box)({
    backgroundColor: "rgb(185, 171, 25)", // Color verde oliva
    padding: "20px",
    borderRadius: "15px",
    margin: "20px auto",
    maxWidth: "80%",
    textAlign: "center",
    color: "white",
});

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Background>
                <Container maxWidth="lg" sx={{ position: "relative" }}>
                    <HeaderBox textAlign="center" mt={5}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            UVAPP
                        </Typography>
                        <Typography variant="h6" component="h2">
                            El estudio del vino
                        </Typography>
                        <Box mt={3}>
                            <Button
                                variant="contained"
                                startIcon={<HomeIcon />}
                                onClick={() => navigate("/login")}
                                sx={{ mr: 2 }}
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={<LoginIcon />}
                                onClick={() => navigate("/register")}
                            >
                                Register
                            </Button>
                        </Box>
                    </HeaderBox>

                    <TrendBox>
                        <Typography variant="h6" mb={2}>
                            EN TENDENCIA
                        </Typography>
                        <Box sx={{ maxWidth: "80%", margin: "0 auto" }}> 
                            <Carousel
                                showThumbs={false}
                                autoPlay
                                infiniteLoop
                                interval={5000} // tiempo de cada imagen
                                showStatus={false}
                                dynamicHeight={false} // Evita que el carrusel cambie de altura con cada imagen
                            >
                                <div>
                                    <img src="/img/bodega-achaval.jpg" alt="Bodega 1" style={{ height: "300px", objectFit: "cover" }} /> {/* Ajusta la altura */}
                                    <p className="legend">Bodega Achaval</p>
                                </div>
                                <div>
                                    <img src="/img/bodega-andeluna.jpg" alt="Bodega 2" style={{ height: "300px", objectFit: "cover" }} />
                                    <p className="legend">Bodega Andeluna</p>
                                </div>
                                <div>
                                    <img src="/img/casa-vigil.jpg" alt="Bodega 3" style={{ height: "300px", objectFit: "cover" }} />
                                    <p className="legend">Casa Vigil</p>
                                </div>
                            </Carousel>
                        </Box>
                    </TrendBox>


                    <Box mt={2}>
                        <StyledBox>
                            <Box display="flex" justifyContent="center" alignItems="center" mb={0} overflow="hidden">
                                <Card sx={{ maxWidth: 500 }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image="/bodega-lopez.jpg" // Verifica la ruta de la imagen
                                        alt="Bodega"
                                    />
                                </Card>
                                <Box ml={3} flex={1} overflow="hidden">
                                    <Typography variant="h4">Bodega Lopez</Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Ubicación: Maipú, Mendoza.
                                    </Typography>
                                    <Typography variant="body2" mt={1}>
                                        Desde su fundación en 1898 Bodegas López representa un caso
                                        excepcional dentro de la industria vitivinícola argentina. Hoy
                                        continúa en manos de la familia fundadora, ofreciendo desde
                                        siempre la mejor calidad. Labrando una historia desde el
                                        trabajo, amor al detalle y pasión por los grandes vinos,
                                        respalda un estilo propio cultivado por cuatro generaciones,
                                        “El Estilo López”.
                                    </Typography>
                                </Box>
                            </Box>
                        </StyledBox>

                        <Box mt={5}>
                            <Grid container spacing={3}>
                                {[1, 2, 3].map((review, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <Card>
                                            <CardContent>
                                                <Box display="flex" alignItems="center">
                                                    <img
                                                        src="/user.jpg"
                                                        alt="Usuario"
                                                        width="50"
                                                        height="50"
                                                        style={{ borderRadius: "50%" }}
                                                    />
                                                    <Box ml={2}>
                                                        <Typography variant="h6">
                                                            Usuario {index + 1}
                                                        </Typography>
                                                        <Rating value={4} readOnly />
                                                    </Box>
                                                </Box>
                                                <Typography variant="body2" mt={2}>
                                                    Muy buena experiencia, una bodega antigua. El tour nos encantó, quien nos dirigió super atento y respondía todas nuestras dudas.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Background>
        </>
    );
}
