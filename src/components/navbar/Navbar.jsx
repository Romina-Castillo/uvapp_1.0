import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, InputBase, Menu, MenuItem, Badge } from "@mui/material";
import { useState, useEffect, useRef } from "react";
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
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBodegas, setFilteredBodegas] = useState(bodegasData);
    const [showResults, setShowResults] = useState(false);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    const [filterAnchorEl, setFilterAnchorEl] = useState(null); // Estado para el menú de filtros
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const searchBoxRef = useRef(null); // Ref para el Box de búsqueda
    const [searchBoxPosition, setSearchBoxPosition] = useState(null); // Posición del Box
    const navigate = useNavigate();

    useEffect(() => {
        console.log(bodegasData);

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

    const handleSearch = () => {
        const filteredResults = bodegasData.filter(bodega =>
            bodega.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBodegas(filteredResults);
        setShowResults(filteredResults.length > 0);
        
        // Calcula la posición del Box después de que se actualice
        if (searchBoxRef.current) {
            const position = searchBoxRef.current.getBoundingClientRect();
            setSearchBoxPosition(position);
        }
    };

    const handleFilterClick = (event) => {
        setFilterAnchorEl(event.currentTarget); // Abre el menú de filtros
    };

    const handleFilterClose = () => {
        setFilterAnchorEl(null); // Cierra el menú de filtros
    };

    const handleFilterByBodega = () => {
        console.log("Filtrar por Bodega");
        handleFilterClose(); // Cierra el menú después de seleccionar
    };

    const handleFilterByEvento = () => {
        console.log("Filtrar por Evento");
        handleFilterClose(); // Cierra el menú después de seleccionar
    };

    const handleFilterByPrograma = () => {
        console.log("Filtrar por Programa");
        handleFilterClose(); // Cierra el menú después de seleccionar
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        localStorage.removeItem("username");
        navigate('/');
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
                    <IconButton color="inherit" size="large" onClick={() => setOpen(true)} edge="start">
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }} ref={searchBoxRef}>
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
                                    handleSearch();
                                }
                            }}
                        />
                    </Box>

                    <Button color="inherit" startIcon={<FilterListIcon />} onClick={handleFilterClick}>
                        Filtros
                    </Button>

                    <Menu anchorEl={filterAnchorEl} open={Boolean(filterAnchorEl)} onClose={handleFilterClose}>
                        <MenuItem onClick={handleFilterByBodega}>Filtrar por Bodega</MenuItem>
                        <MenuItem onClick={handleFilterByEvento}>Filtrar por Evento</MenuItem>
                        <MenuItem onClick={handleFilterByPrograma}>Filtrar por Programa</MenuItem>
                    </Menu>

                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleOpenNotifications}>
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

                    <Menu anchorEl={userAnchorEl} open={Boolean(userAnchorEl)} onClose={handleCloseUserMenu}>
                        {isLoggedIn ? (
                            [
                                <MenuItem key="mis_reservas" onClick={() => navigate("/usuario_reservas")}>
                                    Mis reservas
                                </MenuItem>,
                                <MenuItem key="gestionar_cuenta" onClick={() => navigate("/usuario")}>
                                    Gestionar cuenta
                                </MenuItem>,
                                <MenuItem key="cerrar_sesion" onClick={handleLogout}>
                                    Cerrar sesión
                                </MenuItem>
                            ]
                        ) : (
                            [
                                <MenuItem key="iniciar_sesion" onClick={handleLogin}>
                                    Iniciar sesión
                                </MenuItem>,
                                <MenuItem key="registrarse" onClick={handleRegister}>
                                    Registrarse
                                </MenuItem>
                            ]
                        )}
                    </Menu>
                </Toolbar>
            </AppBar>

            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
            </Drawer>

            {/* Resultados de búsqueda */}
{searchQuery && showResults && searchBoxPosition && (
    <Box
        sx={{
            position: "absolute",
            top: `${searchBoxPosition.bottom + 20}px`, // Añade un margen de 8px entre la navbar y los resultados
            left: `${searchBoxPosition.left}px`,
            width: `580px`, // Mantén el ancho igual al del box de búsqueda
            backgroundColor: "white",
            zIndex: 1000,
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
    >
        {filteredBodegas.map((bodega, index) => (
            <Typography
                key={index}
                sx={{
                    padding: "10px", 
                    cursor: "pointer",
                    borderBottom: index !== filteredBodegas.length - 1 ? "1px solid rgba(0, 0, 0, 0.12)" : "none"
                }}
                onClick={() => {
                    navigate(`${bodega.route}`);
                    setShowResults(false);
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
