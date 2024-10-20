import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; 
import { motion } from 'framer-motion'; // Importa Framer Motion
import './OfertaEdu.css';

const programs = [
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

const OfertaEdu = () => {
  return (
      <>
          <Grid container spacing={3} sx={{ mt: 10 }}>
              {programs.map((program, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                      <motion.div
                          initial={{ opacity: 0, y: 20 }} // Inicialmente oculta y desplazada
                          animate={{ opacity: 1, y: 0 }} // Se muestra y se desplaza hacia su posición original
                          transition={{ duration: 0.5, delay: index * 0.1 }} // Retraso basado en el índice
                      >
                          <Card
                              sx={{
                                  '&:hover': {
                                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)', // Sombra al pasar el mouse
                                      transform: 'scale(1.05)', // Escalado al pasar el mouse
                                      transition: 'transform 0.3s ease-in-out', // Transición suave
                                  }
                              }}
                          >
                              <CardMedia
                                  component="img"
                                  height="200" // Ajusta la altura de la imagen
                                  image={program.image} // Usa la URL de la imagen del programa
                                  alt={program.title} // Texto alternativo para la imagen
                              />
                              <CardContent>
                                  <Typography variant="h6" component="div">
                                      {program.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      {program.description}
                                  </Typography>
                                  <Button
                                      variant="contained"
                                      color="primary"
                                      component={Link}
                                      to={program.link} // Usar el enlace del programa
                                      sx={{ mt: 2 }}
                                  >
                                      Ver Programa
                                  </Button>
                              </CardContent>
                          </Card>
                      </motion.div>
                  </Grid>
              ))}
          </Grid>
      </>
  );
};

export default OfertaEdu;