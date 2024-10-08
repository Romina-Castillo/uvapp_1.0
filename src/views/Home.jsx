import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from 'framer-motion';
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
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // color borde los ultimos son el nivel de transparencia
    marginTop: "10px",
    margin: "0 auto",
});

const HeaderBox = styled(StyledBox)({
    backgroundColor: "rgba(145, 65, 76, 0.7)",
    color: "white",
    textAlign: 'center',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
});

const TrendBox = styled(motion.div)({
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
    return (
        <Background>
            <Container maxWidth="lg" sx={{ position: "relative" }}>
                {/* Logo completo en lugar de la animación del texto */}
                <HeaderBox>
                  <motion.img
                    src="/public/image_uvapp.png" // Ruta de tu logo completo
                    alt="UVAPP Logo"
                    style={{ height: '150px', marginBottom: '20px' }} // Ajusta el tamaño según sea necesario
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </HeaderBox>

                {/* TrendBox animado con efecto de entrada */}
                <TrendBox
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
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
                        >
                            <div>
                                <CarouselImageContainer>
                                    <motion.img
                                        src="/img/bodega-achaval.jpg"
                                        alt="Bodega 1"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
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
                                    <motion.img
                                        src="/img/casa-vigil.jpg"
                                        alt="Bodega 2"
                                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
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
