import { Container, Button, Box, Typography, Grid, Card, CardContent, Rating } from "@mui/material";
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
    minHeight: "100vh", // Cambiado a 100vh para llenar la pantalla
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

const StyledBox = styled(Box)({
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",         // color bordo los ultimos son el nivel de transparencia
    marginTop: "10px",
    margin: "0 auto",
});

const HeaderBox = styled(StyledBox)({
    backgroundColor: "rgba(145, 65, 76, 0.7)",
    color: "white",
});

const TrendBox = styled(Box)({
    backgroundColor: "rgb(185, 171, 25)",
    padding: "20px",
    borderRadius: "15px",
    margin: "20px auto",
    maxWidth: "80%",
    textAlign: "center",
    color: "white",
});

const CarouselImageContainer = styled(Box)({
    position: "relative",
    height: "300px",
    overflow: "hidden",
});

export default function HomePage() {
    const navigate = useNavigate();
    
    return (
        <Background>
            <Container maxWidth="lg" sx={{ position: "relative" }}>
                <HeaderBox textAlign="center" mt={5}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        UVAPP
                    </Typography>
                    <Typography variant="h6" component="h2">
                        El estudio del vino
                    </Typography>
                    {/* <Box mt={3}>
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
                    </Box> eran las opciones que aparecian debajo*/}
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
                            interval={5000}
                            showStatus={false}
                            dynamicHeight={false}
                            onMouseEnter={() => setShowComments(true)}
                            onMouseLeave={() => setShowComments(false)}
                        >
                            <div>
                                <CarouselImageContainer>
                                    <img
                                        src="/img/bodega-achaval.jpg"
                                        alt="Bodega 1"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            color: "white",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            ":hover": { opacity: 1 },
                                        }}
                                    >
                                        Bodega Achaval - Ubicada en Mendoza, conocida por su Malbec.
                                    </Box>
                                </CarouselImageContainer>
                            </div>
                            <div>
                                <CarouselImageContainer>
                                    <img
                                        src="/img/casa-vigil.jpg"
                                        alt="Bodega 2"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            color: "white",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            ":hover": { opacity: 1 },
                                        }}
                                    >
                                        Casa Vigil - Un lugar icónico en el corazón de Mendoza.
                                    </Box>
                                </CarouselImageContainer>
                            </div>
                        </Carousel>
                    </Box>
                </TrendBox>
            </Container>
        </Background>
    );
}
