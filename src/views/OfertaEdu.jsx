import React, { useState, useEffect } from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import './OfertaEdu.css';
import CardComponent from "../components/CardComponent";

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

const questions = [
    {
        question: '¿Qué tipo de vino es el Chardonnay?',
        options: [
            { answer: 'Vino blanco', isCorrect: true },
            { answer: 'Vino tinto', isCorrect: false },
            { answer: 'Vino rosado', isCorrect: false }
        ]
    },
    {
        question: '¿Qué país es uno de los mayores productores de vino del mundo?',
        options: [
            { answer: 'Brasil', isCorrect: false },
            { answer: 'India', isCorrect: false },
            { answer: 'Francia', isCorrect: true }
        ]
    },
    {
        question: '¿Qué significa el término “reserva” en vinos?',
        options: [
            { answer: 'Un vino de menor calidad', isCorrect: false },
            { answer: 'Un vino envejecido por un tiempo mayor antes de su venta', isCorrect: true },
            { answer: 'Un tipo de vino blanco', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es el papel de los taninos en el vino?',
        options: [
            { answer: 'Son responsables del color del vino', isCorrect: false },
            { answer: 'Aportan estructura y astringencia', isCorrect: true },
            { answer: 'Añaden dulzura al vino', isCorrect: false }
        ]
    },
    {
        question: '¿Dónde puedes estudiar Enología en Mendoza?',
        options: [
            { answer: 'Universidad Nacional de Cuyo', isCorrect: true },
            { answer: 'Universidad de Buenos Aires', isCorrect: false },
            { answer: 'Universidad Nacional del Litoral', isCorrect: false }
        ]
    },
    {
        question: '¿Qué es la Enología?',
        options: [
            { answer: 'El estudio de la ciencia del vino y su elaboración', isCorrect: true },
            { answer: 'La degustación de vinos', isCorrect: false },
            { answer: 'El estudio de la geografía de los viñedos', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es el proceso de fermentación en la elaboración del vino?',
        options: [
            { answer: 'La transformación de azúcar en alcohol mediante levaduras', isCorrect: true },
            { answer: 'La embotellado del vino', isCorrect: false },
            { answer: 'La destilación de líquidos para obtener alcohol', isCorrect: false }
        ]
    },
    {
        question: '¿Qué es un sommelier?',
        options: [
            { answer: 'Un productor de vino', isCorrect: false },
            { answer: 'Un experto en vinos encargado de recomendar y servir vinos en restaurantes', isCorrect: true },
            { answer: 'Una persona que solo degusta vinos', isCorrect: false }
        ]
    },
    {
        question: '¿Qué tipo de uva se utiliza comúnmente para el vino tinto?',
        options: [
            { answer: 'Chardonnay', isCorrect: false },
            { answer: 'Cabernet Sauvignon', isCorrect: true },
            { answer: 'Sauvignon Blanc', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es una característica principal de los vinos espumosos?',
        options: [
            { answer: 'Son envejecidos por más de 10 años', isCorrect: false },
            { answer: 'Contienen burbujas de dióxido de carbono', isCorrect: true },
            { answer: 'Son siempre de color blanco', isCorrect: false }
        ]
    },
    {
        question: '¿Cuál es el mejor tipo de copa para degustar vino tinto?',
        options: [
            { answer: 'Copa pequeña y cerrada', isCorrect: false },
            { answer: 'Copa de cóctel', isCorrect: false },
            { answer: 'Copa de cáliz ancho y boca estrecha', isCorrect: true }
        ]
    },
    {
        question: '¿Qué es el terroir en la viticultura?',
        options: [
            { answer: 'El tipo de uva utilizado', isCorrect: false },
            { answer: 'La combinación de suelo, clima y otros factores que influyen en el cultivo de la vid', isCorrect: true },
            { answer: 'El proceso de embotellado del vino', isCorrect: false }
        ]
    }
];


const OfertaEdu = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null); // null, true, o false

    useEffect(() => {
        setOpenDialog(true);
    }, []);

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleAnswer = (isCorrect) => {
        setIsCorrectAnswer(isCorrect);
        setFeedback(isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.');
    };

    const handleNextQuestion = () => {
        setFeedback('');
        setIsCorrectAnswer(null);
        setCurrentQuestion((prev) => prev + 1);
    };

    return (
        <>
            {/* Modal de preguntas y respuestas */}
            <motion.div
                initial={false}
                animate={isCorrectAnswer === null ? {} : (isCorrectAnswer ? { scale: 1.1 } : { x: [0, -10, 10, -10, 10, 0] })}
                transition={{ duration: 0.5 }}
            >
                <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                Para saber más sobre el mundo del vino...
                            </motion.div>
                            <IconButton onClick={handleClose} color="inherit" aria-label="cerrar">
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="h6" align="center">{questions[currentQuestion].question}</Typography>
                        {questions[currentQuestion].options.map((option, index) => (
                            <Box key={index} mt={2}>
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }} // Animación al pasar el ratón
                                    whileTap={{ scale: 0.95 }} // Animación al hacer clic
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={() => handleAnswer(option.isCorrect)}
                                        fullWidth
                                    >
                                        {option.answer}
                                    </Button>
                                </motion.div>
                            </Box>
                        ))}

                        {feedback && (
                            <Typography
                                variant="body1"
                                align="center"
                                style={{
                                    color: isCorrectAnswer ? 'green' : 'red',
                                    fontWeight: 'bold',
                                    marginTop: '16px'
                                }}
                            >
                                {feedback}
                            </Typography>
                        )}
                    </DialogContent>
                    <DialogActions>
                        {currentQuestion < questions.length - 1 ? (
                            <Button onClick={handleNextQuestion} color="primary" disabled={!feedback}>
                                Siguiente
                            </Button>
                        ) : (
                            <Button onClick={handleClose} color="primary">
                                Finalizar
                            </Button>
                        )}
                    </DialogActions>
                </Dialog>
            </motion.div>

            {/* Lista de programas educativos */}
            <Grid container spacing={3} sx={{ mt: 10 }}>
                {programs.map((program, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <MotionDiv
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
                        </MotionDiv>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default OfertaEdu;
