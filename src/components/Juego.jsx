// componente lo cree para poder reutilizarlo en todas las vistas que queramos 

import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { questions } from '../Preguntas';

const Juego = ({ open, onClose }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

    useEffect(() => {
        if (open) setCurrentQuestion(0);
    }, [open]);

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
        <motion.div
            initial={false}
            animate={isCorrectAnswer === null ? {} : (isCorrectAnswer ? { scale: 1.1 } : { x: [0, -10, 10, -10, 10, 0] })}
            transition={{ duration: 0.5 }}
        >
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            Para saber más sobre el mundo del vino...
                        </motion.div>
                        <IconButton onClick={onClose} color="inherit" aria-label="cerrar">
                            <CloseIcon />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h6" align="center">{questions[currentQuestion].question}</Typography>
                    {questions[currentQuestion].options.map((option, index) => (
                        <Box key={index} mt={2}>
                            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outlined" onClick={() => handleAnswer(option.isCorrect)} fullWidth>
                                    {option.answer}
                                </Button>
                            </motion.div>
                        </Box>
                    ))}
                    {feedback && (
                        <Typography variant="body1" align="center" style={{ color: isCorrectAnswer ? 'green' : 'red', fontWeight: 'bold', marginTop: '16px' }}>
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
                        <Button onClick={onClose} color="primary">
                            Finalizar
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </motion.div>
    );
};

export default Juego;