import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, InputBase, Menu, MenuItem, Badge } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';

// Importa los datos de bodegas, eventos, industrias y programas
import { bodegasData } from '../../views/Bodegas.jsx';
import { eventosData } from '../../views/Eventos.jsx';
import { industriasData } from '../../views/Industrias.jsx';
import { programs } from '../../views/OfertaEdu.jsx';

export default function Navbar({ navArrayLinks }) {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    const [filterAnchorEl, setFilterAnchorEl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const searchBoxRef = useRef(null);
    const [searchBoxPosition, setSearchBoxPosition] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
    //             setShowResults(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);

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
        // Combina y filtra resultados de bodegas, eventos, industrias y programas
        const filteredBodegas = bodegasData.filter(bodega =>
            bodega.name && bodega.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
        const filteredEventos = eventosData.filter(evento =>
            evento.name && evento.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
        const filteredIndustrias = industriasData.filter(industria =>
            industria.name && industria.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
        const filteredProgramas = programs.filter(programa =>
            programa.name && programa.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
    
        // Combina todos los resultados buscados
        const combinedResults = [
            ...filteredBodegas.map(bodega => ({ ...bodega, route: `/bodega/${bodega.name}` })), 
            ...filteredEventos.map(evento => ({ ...evento, route: `/eventos/${evento.name}` })),
            ...filteredIndustrias.map(industria => ({ ...industria, route: `/industrias/${industria.name}` })),
            ...filteredProgramas.map(programa => ({ ...programa, route: `/programas/${programa.name}` })),
        ];
        
    
        setFilteredResults(combinedResults);
        setShowResults(combinedResults.length > 0);
    
        if (searchBoxRef.current) {
            const position = searchBoxRef.current.getBoundingClientRect();
            setSearchBoxPosition(position);
        }
    };
    

    const handleFilterClick = (event) => {
        setFilterAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
        setFilterAnchorEl(null);
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
                        <MenuItem onClick={() => console.log("Filtrar por Bodega")}>Filtrar por Bodega</MenuItem>
                        <MenuItem onClick={() => console.log("Filtrar por Evento")}>Filtrar por Evento</MenuItem>
                        <MenuItem onClick={() => console.log("Filtrar por Programa")}>Filtrar por Programa</MenuItem>
                    </Menu>

                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleOpenNotifications}>
                            <Badge badgeContent={1} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    )}

                    <IconButton color="inherit" onClick={handleOpenUserMenu}>
                        <AccountCircleIcon />
                    </IconButton>

                    <Menu anchorEl={userAnchorEl} open={Boolean(userAnchorEl)} onClose={handleCloseUserMenu}>
                        {isLoggedIn ? (
                            <>
                                <MenuItem onClick={() => navigate("/UsuarioGestion")}>Gestionar cuenta</MenuItem>
                                <MenuItem onClick={() => navigate("/usuario_reservas")}>Mis reservas</MenuItem>
                                <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={handleLogin}>Iniciar sesión</MenuItem>
                                <MenuItem onClick={handleRegister}>Registrarse</MenuItem>
                            </>
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
                        top: `${searchBoxPosition.bottom + 20}px`,
                        left: `${searchBoxPosition.left}px`,
                        width: `600px`,
                        backgroundColor: "white",
                        zIndex: 1000,
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                        borderRadius: "4px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {filteredResults.map((result, index) => (
                        <Typography
                            key={index}
                            sx={{
                                padding: "10px",
                                cursor: "pointer",
                                borderBottom: index !== filteredResults.length - 1 ? "1px solid rgba(0, 0, 0, 0.12)" : "none"
                            }}
                            onClick={() => {
                                navigate(`${result.route}`);
                                setShowResults(false);
                            }}
                        >
                            {result.name}
                        </Typography>
                    ))}
                </Box>
            )}
        </>
    );
}
