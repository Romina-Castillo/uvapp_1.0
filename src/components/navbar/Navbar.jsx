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
        localStorage.removeItem("username");
        setUserAnchorEl(null);
        navigate("/login");
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
                        sx={{ display: { xs: "flex", sm: "none" } }}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        UVAPP
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
                        {navArrayLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component={NavLink}
                                to={item.path}
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

                    <IconButton
                        color="inherit"
                        onClick={handleOpenNotifications}
                    >
                        <Badge badgeContent={4} color="error">  
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <IconButton
                        color="inherit"
                        onClick={handleOpenUserMenu}
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
                                <MenuItem>Usuario: {username}</MenuItem>
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
