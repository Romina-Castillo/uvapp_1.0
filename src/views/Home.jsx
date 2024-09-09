import { Container, Button, Box, Typography, Grid, Card, CardContent, CardMedia, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import { styled } from "@mui/system";

const Background = styled("div")({
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "56vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(/Compuertas-Mendoza.jpg)`,
});

const StyledBox = styled(Box)({
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "10px",
    margin: "0 auto",
});

const HeaderBox = styled(StyledBox)({
    backgroundColor: "rgba(145, 65, 76, 0.7)", // Color bordo? transparente
    color: "white",
});

const TrendBox = styled(Box)({
    backgroundColor: "rgb(185, 171, 25)", // Color verde oliva
    padding: "20px",
    width: '20%',
    borderRadius: "15px",
    margin: "20px auto",
    textAlign: "center",
    color: "white",
});

const UserImage = styled("img")({
    borderRadius: "50%",
});

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Background />
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
                    <Typography variant="h6">
                        EN TENDENCIA
                    </Typography>
                </TrendBox>

                <Box mt={2}>
                    <StyledBox>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            mb={0}
                            overflow="hidden"
                        >
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image="/bodega-lopez.jpg"
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
                                                <UserImage
                                                    src="/user.jpg"
                                                    alt="Usuario"
                                                    width="50"
                                                    height="50"
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
        </>
    );
}
