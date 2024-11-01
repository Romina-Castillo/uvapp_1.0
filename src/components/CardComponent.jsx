import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const CardComponent = ({ name, description, img, route }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Card 
            sx={{ 
                backgroundColor: '#c0c0c0', // Color de fondo suave para la tarjeta
                border: '1px solid #e0e0e0', // Borde sutil
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra normal
                '&:hover': { 
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)', 
                    transform: 'scale(1.05)', 
                    transition: 'transform 0.3s ease-in-out' 
                } 
            }}
        >
            <CardMedia component="img" height="200" image={img} alt={name} />
            <CardContent>
                <Typography variant="h6" component="div">{name}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
                <Button variant="contained" color="primary" component={Link} to={route} sx={{ mt: 2 }}>Ver Más</Button>
            </CardContent>
        </Card>
    </motion.div>
);

export default CardComponent;
