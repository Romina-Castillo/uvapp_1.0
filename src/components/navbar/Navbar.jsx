import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, MenuIcon} from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import { useState } from "react";

const navLinks = [
    {   
        title: "Home", path: "#"
    },
]



export default function Navbar() {

        const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="absolute">
                <Toolbar>
                <IconButton
                    color="inherit"
                    size="large"
                    onClick={() => setOpen(true)}
                    >
                     <MenuIcon />
                </IconButton>
                <Typography  
                variant="h6" 
                sx={{ flexGrow: 1 }}
                > UVAPP 
                </Typography>

                



                {
                    navLinks.map(item=> (
                        <Button color="inherit" key={item.title}>{item.title} </Button>
                    ))
                }
                <Button color="inherit"> Home </Button>
                <Button color="inherit"> Login </Button>
                <Button color="inherit"> Registrarse </Button>
                </Toolbar>
            </AppBar>
                <Drawer
                    open={open}
                    anchor="left" 
                    onClose={() => setOpen(false)}
                    >
                    <NavListDrawer />
                </Drawer>
    </>
    )
}