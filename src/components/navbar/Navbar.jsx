import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NavListDrawer from "./NavListDrawer"
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({navArrayLinks}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: {xs: "flex", sm: "none" } }}
                        edge="start"
                        >    
                            <MenuIcon />
                    </IconButton>
                    <Typography  
                    variant="h6" 
                    sx={{ flexGrow: 1 }}
                    >
                    UVAPP 
                    </Typography>
                    <Box>
                        {navArrayLinks.map(item=> (
                            <Button 
                                color="inherit" 
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                            >
                                {item.title}
                            </Button>
                        ))}
                
                        <Button color="inherit"> Filtro </Button>
                        <Button color="inherit"> Notificaciones </Button>
                        <Button color="inherit"> Cuenta </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={open}
                    anchor="left" 
                    onClose={() => setOpen(false)}
                    >
                    <NavListDrawer navArrayLinks={navArrayLinks} 
                    NavLink={NavLink}
                    setOpen={setOpen}
                    />
                </Drawer>
    </>
    )
}