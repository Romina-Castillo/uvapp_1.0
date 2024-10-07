import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, InputBase, Menu, MenuItem, Badge } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({ navArrayLinks }) {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleOpenNotifications = (event) => {
        setNotificationsAnchorEl(event.currentTarget);
    };

    const handleCloseNotifications = () => {
        setNotificationsAnchorEl(null);
    };

    const handleOpenUserMenu = (event) => {
        setUserAnchorEl(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setUserAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterClick = () => {
        console.log("Aplicar filtros");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        localStorage.removeItem("username");  // Eliminar el nombre de usuario de localStorage
        navigate('/');  // Redirige a la página de inicio
    };

    const handleLogin = () => {
        setUserAnchorEl(null);
        navigate("/login");
    };

    const handleRegister = () => {
        setUserAnchorEl(null);
        navigate("/register");
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        // sx={{ display: { xs: "flex", sm: "none" } }} esto ocultaba el icono de menu y solo lo mostraba cuando se pasaba a pantalla pequeña
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }}>
                        <img src="\public\image.png" alt="UVAPP Logo" style={{ height: '70px' }} />
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
                        {navArrayLinks.map((item) => (
                           <Button
                           color="inherit"
                           key={item.title}
                           component={NavLink}
                           to={item.path}
                           sx={{
                               transition: 'all 0.3s ease-in-out',
                               '&:hover': {
                                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                   transform: 'scale(1.05)',
                                   color: '#FFFFFF', // Cambia el color del texto al hacer hover
                               },
                           }}
                       >
                           {item.title}
                       </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <SearchIcon />
                        <InputBase
                            placeholder="Buscar…"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            sx={{
                                ml: 1,
                                color: "black",
                                backgroundColor: "white",
                                borderRadius: 1,
                                padding: '0 10px',
                                width: '100%',
                            }}
                        />
                    </Box>

                    <Button color="inherit" startIcon={<FilterListIcon />} onClick={handleFilterClick}>
                        Filtro
                    </Button>

                    {isLoggedIn && (                                          // is loggedIn verifica que el usuario se ha logueado
                        <IconButton
                            color="inherit"
                            onClick={handleOpenNotifications}
                        >
                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    )}

                        <IconButton
                            color="inherit"
                            onClick={handleOpenUserMenu}
                            sx={{
                                transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.2)', // Aumenta el tamaño en un 20% al hacer hover
                                    filter: 'brightness(1.5)', // Efecto de brillo
                                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.9)', // Añade una sombra suave
                                },
                                '&:active': {
                                    transform: 'scale(1.1)', // Ligero rebote al hacer click
                                },
                            }}
                        >
                            <AccountCircleIcon />
                        </IconButton>




                    <Menu
                        anchorEl={userAnchorEl}
                        open={Boolean(userAnchorEl)}
                        onClose={handleCloseUserMenu}
                    >
                        {isLoggedIn ? (
                            <>
                                <MenuItem onClick={() => navigate("/usuario_reservas")} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>Mis reservas</MenuItem>
                                <MenuItem onClick={() => navigate("/usuario")} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>Gestionar cuenta</MenuItem>
                                <MenuItem onClick={handleLogout} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>Cerrar sesión</MenuItem>

                            </>
                        ) : (
                            <>
                                <MenuItem onClick={handleLogin} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>Iniciar sesión</MenuItem>
                                <MenuItem onClick={handleRegister} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>Registrarse</MenuItem>
                            </>
                        )}
                    </Menu>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavListDrawer
                    navArrayLinks={navArrayLinks}
                    NavLink={NavLink}
                    setOpen={setOpen}
                />
            </Drawer>
        </>
    );
}
