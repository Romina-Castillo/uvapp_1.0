import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate

const Background = styled("div")({
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "rgba(145, 65, 76, 0.7)",
    color: "white",
    textAlign: 'center',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
});

const TrendBox = styled(motion.div)({
    backgroundColor: "rgb(185, 171, 25)", // Cambia este color según necesites
    padding: "20px",
    borderRadius: "15px",
    margin: "20px auto",
    maxWidth: "100%",
    textAlign: "center",
    color: "white",
});

const CarouselImageContainer = styled(Box)({
    position: "relative",
    height: "450px",
    overflow: "hidden",
});

const BannerContainer = styled(Box)({
    position: "relative",
    margin: "20px 0",
    cursor: "pointer", // Cambiado para indicar que es clickeable
});

const BannerImage = styled(motion.img)({
    height: "200px", // Asegúrate de que la altura sea la misma que la del sombreado
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
});

const BannerText = styled(motion(Typography))({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Hacer que ocupe todo el ancho
    height: "100%", // Hacer que ocupe toda la altura
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    fontSize: "2rem", // Aumentar el tamaño del texto
    fontWeight: "bold", // Hacer el texto más llamativo
    opacity: 0,
    transition: "opacity 0.5s ease", // Efecto de transición para la opacidad
});

// Componente que agrega el efecto hover tanto a la imagen como al texto
const HoverEffectContainer = styled(motion.div)({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "200px", // Asegúrate de que coincida con la altura de BannerImage
    cursor: "pointer",
    overflow: "hidden",
    '&:hover': {
        opacity: 1,
    },
});

export default function HomePage() {
    const navigate = useNavigate(); // Definición de useNavigate

    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <Background>
            <Container maxWidth="lg" sx={{ position: "relative" }}>
                {/* Logo completo en lugar de la animación del texto */}
                <HeaderBox>
                    <motion.img
                        src="image_uvapp.png" // Ruta de tu logo completo
                        alt="UVAPP Logo"
                        style={{ height: '150px', width: 'auto', marginBottom: '20px' }} // Ajusta el tamaño según sea necesario
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
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

                {/* Banners adicionales */}
                <Typography variant="h6" mb={2}>
                    OTRAS SECCIONES
                </Typography>
                
                {/* Contenedor con efecto hover para las secciones */}
                <BannerContainer onClick={() => handleRedirect('/Bodegas')}>
                    <HoverEffectContainer whileHover={{ scale: 1.05 }}>
                        <BannerImage
                            src="bodegas.jpg" // Ruta de tu imagen de oferta educativa
                            alt="Bodegas"
                        />
                        <BannerText
                            variant="body2"
                            initial={{ opacity: 0 }} // Efecto de aparición inicial
                            animate={{ opacity: 1 }} // Efecto de aparición
                            whileHover={{ scale: 1.1, color: "rgb(185, 171, 25)" }} // Efecto al pasar el cursor, cambia a color tendencia
                            transition={{ duration: 0.5, delay: 0.3 }} // Tiempo de aparición
                        >
                            Bodegas
                        </BannerText>
                    </HoverEffectContainer>
                </BannerContainer>

                <BannerContainer onClick={() => handleRedirect('/Industrias')}>
                    <HoverEffectContainer whileHover={{ scale: 1.05 }}>
                        <BannerImage
                            src="industrias.jpg" // Ruta de tu imagen de oferta educativa
                            alt="Industrias"
                        />
                        <BannerText
                            variant="body2"
                            initial={{ opacity: 0 }} // Efecto de aparición inicial
                            animate={{ opacity: 1 }} // Efecto de aparición
                            whileHover={{ scale: 1.1, color: "rgb(185, 171, 25)" }} // Efecto al pasar el cursor, cambia a color tendencia
                            transition={{ duration: 0.5, delay: 0.3 }} // Tiempo de aparición
                        >
                            Industrias
                        </BannerText>
                    </HoverEffectContainer>
                </BannerContainer>

                <BannerContainer onClick={() => handleRedirect('/OfertaEdu')}>
                    <HoverEffectContainer whileHover={{ scale: 1.05 }}>
                        <BannerImage
                            src="Estudiantes.jpg" // Ruta de tu imagen de oferta educativa
                            alt="Oferta Educativa"
                        />
                        <BannerText
                            variant="body2"
                            initial={{ opacity: 0 }} // Efecto de aparición inicial
                            animate={{ opacity: 1 }} // Efecto de aparición
                            whileHover={{ scale: 1.1, color: "rgb(185, 171, 25)" }} // Efecto al pasar el cursor, cambia a color tendencia
                            transition={{ duration: 0.5, delay: 0.3 }} // Tiempo de aparición
                        >
                            Oferta Educativa
                        </BannerText>
                    </HoverEffectContainer>
                </BannerContainer>
                <BannerContainer onClick={() => handleRedirect('/Eventos')}>
                    <HoverEffectContainer whileHover={{ scale: 1.05 }}>
                        <BannerImage
                            src="eventos.jpg" // Ruta de tu imagen de eventos
                            alt="Eventos"
                        />
                        <BannerText
                            variant="body2"
                            initial={{ opacity: 0 }} // Efecto de aparición inicial
                            animate={{ opacity: 1 }} // Efecto de aparición
                            whileHover={{ scale: 1.1, color: "rgb(185, 171, 25)" }} // Efecto al pasar el cursor, cambia a color tendencia
                            transition={{ duration: 0.5, delay: 0.2 }} // Tiempo de aparición
                        >
                            Eventos
                        </BannerText>
                    </HoverEffectContainer>
                </BannerContainer>
            </Container>
        </Background>
    );
}
