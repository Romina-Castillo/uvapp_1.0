import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, InputBase, Menu, MenuItem, Badge } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { bodegasData } from '../../views/Bodegas.jsx';

export default function Navbar({ navArrayLinks }) {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // Estado para el término de búsqueda
    const [filteredBodegas, setFilteredBodegas] = useState(bodegasData); // Estado para bodegas filtradas
    const [showResults, setShowResults] = useState(false); // Estado para controlar la visibilidad de los resultados
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log(bodegasData); // ver en consola para ver si esta recibiendo el array

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

    // Función para buscar y filtrar resultados
    const handleSearch = () => {
        const filteredResults = bodegasData.filter(bodega =>
            bodega.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredBodegas(filteredResults); // Actualiza el estado con los resultados filtrados
        setShowResults(filteredResults.length > 0); // Muestra los resultados solo si hay coincidencias
    };


    const handleFilterClick = () => {

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
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

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
                                width: '50%',
                            }}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch(); // Ejecuta la búsqueda al presionar Enter
                                }
                            }}
                        />
                    </Box>

                    <Button color="inherit" startIcon={<FilterListIcon />} onClick={handleFilterClick}>
                        Filtros
                    </Button>

                    {isLoggedIn && (
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
                                transform: 'scale(1.2)',
                                filter: 'brightness(1.5)',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.9)',
                            },
                            '&:active': {
                                transform: 'scale(1.1)',
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
                            [// si esta logueado opiones del usuario muestra
                                <MenuItem key="mis_reservas" onClick={() => navigate("/usuario_reservas")} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
                                    Mis reservas
                                </MenuItem>,
                                <MenuItem key="gestionar_cuenta" onClick={() => navigate("/usuario")} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
                                    Gestionar cuenta
                                </MenuItem>,
                                <MenuItem key="cerrar_sesion" onClick={handleLogout} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
                                    Cerrar sesión
                                </MenuItem>
                            ]
                        ) : (
                            [// si no esta logueado en el icono de usuario muestra
                                <MenuItem key="iniciar_sesion" onClick={handleLogin} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
                                    Iniciar sesión
                                </MenuItem>,
                                <MenuItem key="registrarse" onClick={handleRegister} sx={{ transition: 'transform 0.3s, background-color 0.3s', '&:hover': { transform: 'scale(1.05)', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
                                    Registrarse
                                </MenuItem>
                            ]
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

            {/* Resultados de búsqueda */}
            {searchQuery && showResults && (
                <Box sx={{ position: "absolute", top: "70px", left: "50%", transform: "translateX(-50%)", backgroundColor: "white", zIndex: 1000 }}>
                    {filteredBodegas.map((bodega, index) => (
                        <Typography
                            key={index}
                            sx={{ padding: "10px", cursor: "pointer" }}
                            onClick={() => {
                                navigate(`${bodega.route}`);  // Redirige a la vista de la bodega
                                setShowResults(false); // Oculta los resultados después de hacer clic
                            }}
                        >
                            {bodega.name}
                        </Typography>
                    ))}
                </Box>
            )}

        </>
    );
}
