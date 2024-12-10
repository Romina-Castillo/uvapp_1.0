import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Importa Framer Motion
import CardComponent from "../components/CardComponent"; // Importa CardComponent

export const industriasData = [
    {
        name: "AVA S.A.",
        description: "Una descripción breve de la Conservera AVA.",
        img: "/img/ava.png",
        route: "/industrias/AVA%20S.A.",
        location: { lat:-33.200561, lng: -68.896118},
    },
];

const Industrias = () => {
    return (
        <>
            <Grid container spacing={3} sx={{ mt: 10 }}>
                {industriasData.map((industria, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                        {/* // se importa el card component para ahorrar codigo bdegas, eventos, industria y ofertas edu tiene la misma estructura */}
                            <CardComponent 
                                name={industria.name} 
                                description={industria.description} 
                                img={industria.img} 
                                route={industria.route} 
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

export default Industrias;
