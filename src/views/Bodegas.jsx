import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom"; 
import { motion } from 'framer-motion'; // Importa Framer Motion
import CardComponent from "../components/CardComponent"; // Importa CardComponent

export const bodegasData = [
    {
        name: "Bodega Andeluna",
        description: "Una descripción breve de la Andeluna.",
        img: "/img/bodega-andeluna.jpg",
        website: "https://wineobs.com.ar/mro/andeluna",
        route: "/bodega/Bodega%20Andeluna",                      // en route ponemos la ruta del buscador definido en app js bodega/:name
        location: { lat:-33.45473519165787, lng: -69.21245040740399 },
    },
    {
        name: "Bodega Séptima",
        description: "Una descripción breve de la Bodega Séptima.",
        img: "/img/bodega-septima.jpg",
        website: "https://www.bodegaseptima.com/enoturismo/",
        route: "/bodega/Bodega%20septima",
        location: { lat:-33.093594, lng: -68.946096 },
    },
    {
        name: "Bodega Salentein",
        description: "Una descripción breve de la Bodega Salentein.",
        img: "/img/bodega-salentein.jpg",
        website: "https://www.bodegasalentein.com/reservas",
        route: "/bodega/Bodega%20salentein",
        location: { lat:-33.498937, lng: -69.252306 },
    },
    {
        name: "Bodega Trapiche",
        description: "Una descripción breve de la Bodega Trapiche.",
        img: "/img/bodega-trapiche.jpeg",
        website: "https://trapiche-costaypampa.meitre.com/",
        route: "/bodega/Bodega%20trapiche",
        location: { lat:-33.45473519165787, lng: -69.21245040740399 },
    },
    {
        name: "Bodega Achaval",
        description: "Una descripción breve la Bodega Achaval Ferrer.",
        img: "/img/bodega-achaval.jpg",
        website: "https://meitre.com/es/quimera-achaval",
        route: "/bodega/Bodega%20achaval",
        location: { lat:-33.45473519165787, lng: -69.21245040740399 },
    },
    {
        name: "Bodega Lopez",
        description: "Una descripción breve de la Bodega Lopez.",
        img: "/img/bodega-lopez.jpg",
        website: "https://experiencias.bodegaslopez.com.ar/",
        route: "/bodega/Bodega%20lopez",
        location: { lat:-32.961633, lng: -68.781140 },
    },
    {
        name: "Casa Vigil",
        description: "Una descripción breve de la Casa Vigil.",
        img: "/img/casa-vigil.jpg",
        website: "https://meitre.com/es/casa-vigil",
        route: "/bodega/Casa%20Vigil",
        location: { lat:-33.044532, lng: -68.724325 },
    },
    {
        name: "Bodega Luigi Bosca",
        description: "Una descripción breve de la Bodega Luigi Bosca.",
        img: "/img/bodega-luigibosca.jpg",
        website: "https://luigibosca.com/experiencias/",
        route: "/bodega/Bodega%20Luigi%20Bosca",
        location: { lat:-33.019809, lng: -68.872970 },
    },
    {
        name: "Bodega Chandon",
        description: "Una descripción breve de la Bodega Chandon.",
        img: "/img/Bodega-Chandon.jpg",
        website: "https://www.chandon.com.ar/nuestra-bodega/",
        route: "/bodega/Bodega%20chandon",
        location: { lat:-32.961633, lng: -68.889557 },
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
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Reemplaza la tarjeta original con CardComponent */}
                            <CardComponent
                                name={bodega.name}
                                description={bodega.description}
                                img={bodega.img}
                                route={bodega.route}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                justifyContent="center"
                sx={{ mt: 5 }}
            >
                {/* botón de página siguiente */}
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
                    Siguiente página
                </Button>
            </Grid>
        </>
    );
};

export default Bodegas;