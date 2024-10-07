import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer({ navArrayLinks, NavLink, setOpen }) {
    return (
        <Box
            sx={{
                width: 250,
                bgcolor: "rgb(185, 171, 25)",
                transition: 'transform 0.3s ease-in-out',
                height: '100vh', // Para que ocupe toda la altura de la pantalla
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centra el contenido horizontalmente
                paddingTop: '20px', // Espaciado superior
            }}
        >
            {/* Logo */}
            <img src="\public\image.png" alt="UVAPP Logo" style={{ height: '80px', marginBottom: '10px' }} />
            
            <nav>
                <List>
                    {navArrayLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                sx={{
                                    padding: '16px',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Fondo más claro al hacer hover
                                        transform: 'scale(1.05)', // Animación de escala
                                        color: '#FFFFFF', // Texto blanco en hover
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ color: 'black' }}> 
                                    {item.icon} 
                                </ListItemIcon>
                                <ListItemText sx={{ fontSize: '18px', color: 'black' }}>
                                    {item.title}
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
};
