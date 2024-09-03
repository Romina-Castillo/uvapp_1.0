import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import { useState } from "react";

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
                    
                </IconButton>
                <Typography 
                variant="h6" 
                sx={{ flexGrow: 1 }}
                > UVAPP 
                </Typography>
                
                <Button color="inherit"> Home </Button>
                <Button color="inherit"> Login </Button>
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