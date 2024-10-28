import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import CardComponent from "../components/CardComponent"; // Importa CardComponent

export const eventosData = [
    {
        name: 'Sunset Wines: Especial HalloWine',
        description: 'Sábado 26 - Open 19:00 hs/Dj Simón Pendola.',
        link: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fmlqryo%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaZOjtY4sZ2h395lRiwlMtlyiLKbu16Z-X0dK0iJlZP0WKBMJhoLC96shtw_aem_rGUK0m80ukCQyjxE442e2g&e=AT0oY0WBqQJrYy5Df-U7z0HJN-It9Bn9KPKfk0lZaEpTkugU5L8K_nuDJHRgxTQ6QqV5P6UIvUFVyp81cM_WuKY0Bv-tAW764KO4kKeJrT9PQGUnnZa7xA',
        img: 'sunset_wines.png',
    },
    {
        name: 'Sunset Wines: Temporada 24/25',
        description: 'Open 19:00 hs/Dj Simón Pendola.',
        link: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fmlqryo%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaZOjtY4sZ2h395lRiwlMtlyiLKbu16Z-X0dK0iJlZP0WKBMJhoLC96shtw_aem_rGUK0m80ukCQyjxE442e2g&e=AT0oY0WBqQJrYy5Df-U7z0HJN-It9Bn9KPKfk0lZaEpTkugU5L8K_nuDJHRgxTQ6QqV5P6UIvUFVyp81cM_WuKY0Bv-tAW764KO4kKeJrT9PQGUnnZa7xA',
        img: 'sunset.png',
    },
    {
        name: 'Sunset Wines: Verano 2024',
        description: 'Sábado 20-Open 19:00 hs/Dj Simón Pendola.',
        link: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fmlqryo%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaZOjtY4sZ2h395lRiwlMtlyiLKbu16Z-X0dK0iJlZP0WKBMJhoLC96shtw_aem_rGUK0m80ukCQyjxE442e2g&e=AT0oY0WBqQJrYy5Df-U7z0HJN-It9Bn9KPKfk0lZaEpTkugU5L8K_nuDJHRgxTQ6QqV5P6UIvUFVyp81cM_WuKY0Bv-tAW764KO4kKeJrT9PQGUnnZa7xA',
        img: 'sunset_verano.png',
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
