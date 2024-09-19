import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer" 
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                p: 3,
                padding: "20px",
                marginTop: "50px", 
                textAlign: "center",
                width: "100vw", 
                position: "relative", 
                bottom: 0, 
            }}
        >
            <Typography variant="body1">
                &copy; {new Date().getFullYear()} UVAPP
            </Typography>

            <Box sx={{ mt: 2 }}>
                <Link href="/about" color="inherit" sx={{ mx: 2 }}>
                    Sobre nosotros
                </Link>

                <Link href="/contact" color="inherit" sx={{ mx: 2 }}>
                    Contáctanos
                </Link>
            </Box>
        </Box>
    );
}

