import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function NavListDrawer() {
    return <Box sx={{ width: 250, bgcolor: "lightgreen"}}>
        <nav> 
            <List>
                <ListItem desablePadding>
                    <ListItemButton
                    component="a"
                    href="Inicio"
                    >
                        <ListItemText> Inicio </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>;

}