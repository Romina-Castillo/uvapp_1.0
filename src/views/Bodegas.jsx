import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom"; 
import { motion } from 'framer-motion'; // Importa Framer Motion
import CardComponent from "../components/CardComponent"; // Importa CardComponent

export const bodegasData = [
    {
        name: "Bodega Andeluna",
        description: "Bodega Andeluna, ubicada en Gualtallary, Valle de Uco, Mendoza, elabora vinos de alta gama aprovechando la altitud y el terroir único de la región. Fundada en 2003, combina tradición e innovación y ofrece experiencias enoturísticas con vistas a los Andes.",
        img: "/img/bodega-andeluna.jpg",
        website: "https://wineobs.com.ar/mro/andeluna",
        route: "/bodega/Bodega%20Andeluna",                      // en route ponemos la ruta del buscador definido en app js bodega/:name
        location: { lat:-33.45473519165787, lng: -69.21245040740399 },
    },
    {
        name: "Bodega Séptima",
        description: "Bodega Séptima, ubicada en Luján de Cuyo, Mendoza, es la filial argentina del Grupo Codorníu. Destaca por su arquitectura en piedra, sus vinos elegantes y su enfoque en la sustentabilidad. Ofrece experiencias turísticas con gastronomía y vistas a la cordillera.",
        img: "/img/bodega-septima.jpg",
        website: "https://www.bodegaseptima.com/enoturismo/",
        route: "/bodega/Bodega%20septima",
        location: { lat:-33.093594, lng: -68.946096 },
    },
    {
        name: "Bodega Salentein",
        description: "Bodega Salentein, ubicada en el Valle de Uco, Mendoza, es reconocida por su arquitectura única y su bodega subterránea. Fundada en 1996, produce vinos de alta calidad como Malbec y Chardonnay, y ofrece experiencias enoturísticas con arte y alojamiento.",
        img: "/img/bodega-salentein.jpg",
        website: "https://www.bodegasalentein.com/reservas",
        route: "/bodega/Bodega%20salentein",
        location: { lat:-33.498937, lng: -69.252306 },
    },
    {
        name: "Bodega Trapiche",
        description: "Bodega Trapiche, fundada en 1883 en Mendoza, es una de las bodegas más reconocidas de Argentina. Destaca por su innovación, viñedos propios y una amplia variedad de vinos de alta calidad. Además, ofrece experiencias enoturísticas premiadas internacionalmente.",
        img: "/img/bodega-trapiche.jpeg",
        website: "https://trapiche-costaypampa.meitre.com/",
        route: "/bodega/Bodega%20trapiche",
        location: { lat:-33.45473519165787, lng: -69.21245040740399 },
    },
    {
        name: "Bodega Achaval",
        description: "Bodega Achaval Ferrer, fundada en 1998 en Luján de Cuyo, Mendoza, es reconocida por sus vinos de alta calidad elaborados con viñedos antiguos y un fuerte respeto por el terroir.",
        img: "/img/bodega-achaval.jpg",
        website: "https://meitre.com/es/quimera-achaval",
        route: "/bodega/Bodega%20achaval",
        location: { lat:-33.45473519165787, lng: -69.21245040740399 },
    },
    {
        name: "Bodega Lopez",
        description: "Bodega López, fundada en 1898 en Maipú, Mendoza, es una bodega familiar emblemática que produce vinos clásicos de alta calidad y ofrece visitas guiadas y degustaciones.",
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