import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import CardComponent from "../components/CardComponent"; // Importa CardComponent

export const eventosData = [
    {
        name: "Sunset",
        description: "Una descripción breve del sunset.",
        img: "/img/ava.png",
        route: "/eventos/sunset"
    },
];

const Eventos = () => {
    return (
        <>
            <Grid container spacing={3} sx={{ mt: 10 }}>
                {eventosData.map((evento, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CardComponent 
                                name={evento.name} 
                                description={evento.description} 
                                img={evento.img} 
                                route={evento.route} 
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 5 }}>
                <Button
                    variant="outlined"
                    component={Link}
                    to="/eventos"
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
                    Página Siguiente
                </Button>
            </Grid>
        </>
    );
};

export default Eventos;
