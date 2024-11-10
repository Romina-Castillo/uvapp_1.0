import React, { useState } from 'react';
import { Grid, Button, Box, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import CardComponent from "../components/CardComponent";
import Juego from "../components/Juego";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import './OfertaEdu.css';

export const programs = [
    {
        title: 'Tecnicatura en Enología e Industrias del Alimento',
        description: 'Instituto Educación Superior 9-023 Maipú.',
        link: 'https://ies9023-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-enologia-e-industrias-alimentarias/',
        image: 'CESIT_MAIPU.jpg',
    },
    {
        title: 'Licenciatura e Ingeniería en Enología',
        description: 'Universidad Juan Agustín Maza.',
        link: 'https://www.umaza.edu.ar/landings/enologia/inicio',
        image: 'Umaza.jpg',
    },
    {
        title: 'Tecnicatura Universitaria en Enología',
        description: 'Universidad Tecnológica Nacional ( Mendoza).',
        link: 'https://www4.frm.utn.edu.ar/tecnicatura-superior-enologia/',
        image: 'UTN.jpg',
    },
    {
        title: 'Complementación Sommelier Universitario',
        description: 'Universidad Juan Agustín Maza.',
        link: 'https://www.umaza.edu.ar/landings/sommelier/index.php',
        image: 'Umaza.jpg',
    },
    {
        title: 'Tecnicatura en Enología e Industrias de los Alimentos',
        description: 'Instituto Educación Superior 9-001 San Martin.',
        link: 'https://ens9001-infd.mendoza.edu.ar/sitio/enologia-e-industrias-frutihorticolas/',
        image: 'CESIT_SAN_MARTIN.jpg',
    },
    {
        title: 'Tecnicatura en Enología e Industrias de los Alimentos',
        description: 'Instituto Educación Superior 9-015 Valle de Uco.',
        link: 'https://iesvu.edu.ar/estudio/tecnicatura-superior-en-enologia-e-industrias-alimentos/',
        image: 'CESIT_VALLE_DE_UCO.jpg',
    },
    {
        title: 'Tecnicatura en Enología e Industrias de los Alimentos',
        description: 'Instituto Educación Superior 9-009 Tupungato.',
        link: 'https://ies9009-infd.mendoza.edu.ar/sitio/',
        image: 'CESIT_TUPUNGATO.jpg',
    },
    {
        title: 'Tecnicatura Universitaria en Enología y Viticultura',
        description: 'Universidad Nacional de Cuyo.',
        link: 'https://fca.uncuyo.edu.ar/estudios/carrera/tecnicatura-universitaria-en-enologia-y-viticultura',
        image: 'UnCuyo_Ciencias_Agrarias.jpg',
    },
    {
        title: 'Complementación Licenciatura en Enología',
        description: 'Universidad Nacional de Cuyo (San Rafael).',
        link: 'https://fcai.uncuyo.edu.ar/estudios/carrera/ciclo-de-licenciatura-en-enologia',
        image: 'uncuyo-s-rafael-13-1_546_966.jpg',
    },
];

const MotionDiv = motion.div;

const OfertaEdu = () => {
    const [openJuego, setOpenJuego] = useState(false);
    const [hovered, setHovered] = useState(false); // Estado para manejar el hover

    const handleOpenJuego = () => setOpenJuego(true);
    const handleCloseJuego = () => setOpenJuego(false);

    return (
        <>
            <Grid container spacing={3} sx={{ mt: 10 }}>
                {programs.map((program, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CardComponent
                                name={program.title}
                                description={program.description}
                                img={program.image}
                                route={program.link}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,  
                    zIndex: 10,
                }}
            >
                <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenJuego}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            paddingX: 3,
                            paddingY: 1.5
                        }}
                    >
                        <SportsEsportsIcon sx={{ mr: 1 }} />
                        {hovered && "¿Quieres jugar?"}
                    </Button>
                </motion.div>
            </Box>
            
            <Juego open={openJuego} onClose={handleCloseJuego} />
        </>
    );
};

export default OfertaEdu;