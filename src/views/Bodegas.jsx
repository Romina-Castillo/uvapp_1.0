import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";


const bodegasData = [
    {
        name: "Bodega 1",
        description: "Una descripción breve de la Bodega 1.",
        img: "/img/bodega-andeluna.jpg",
        website: "https://wineobs.com.ar/mro/andeluna"
    },
    {
        name: "Bodega 2",
        description: "Una descripción breve de la Bodega 2.",
        img: "/img/bodega-septima.jpg",
        website: "https://www.bodegaseptima.com/enoturismo/"
    },
    {
        name: "Bodega 3",
        description: "Una descripción breve de la Bodega 3.",
        img: "/img/bodega-salentein.jpg",
        website: "https://www.bodegasalentein.com/reservas"
    },
    {
        name: "Bodega 4",
        description: "Una descripción breve de la Bodega 4.",
        img: "/img/bodega-trapiche.jpeg",
        website: "https://trapiche-costaypampa.meitre.com/"
    },
    {
        name: "Bodega 5",
        description: "Una descripción breve de la Bodega 5.",
        img: "/img/bodega-achaval.jpg",
        website: "https://meitre.com/es/quimera-achaval"
    },
    {
        name: "Bodega 6",
        description: "Una descripción breve de la Bodega 6.",
        img: "/bodega-lopez.jpg",
        website: "https://experiencias.bodegaslopez.com.ar/"
    },
    {
        name: "Bodega 7",
        description: "Una descripción breve de la Bodega 7.",
        img: "/img/casa-vigil.jpg",
        website: "https://meitre.com/es/casa-vigil"
    },
    {
        name: "Bodega 8",
        description: "Una descripción breve de la Bodega 8.",
        img: "/img/bodega-luigibosca.jpg",
        website: "https://luigibosca.com/experiencias/"
    },
    {
        name: "Bodega 9",
        description: "Una descripción breve de la Bodega 9.",
        img: "/img/Bodega-Chandon.jpg",
        website: "https://www.chandon.com.ar/nuestra-bodega/"
    }
];

const Bodegas = () => {
    return (
        <Grid 
            container 
            spacing={3} 
            sx={{ mt: 10 }} // margen para separar el grid de la Navbar
        >
            {bodegasData.map((bodega, index) => (
                <Grid 
                    item 
                    xs={12}   // Toma toda la fila en dispositivos muy pequeños
                    sm={6}    // 2 columnas en pantallas pequeñas
                    md={4}    // 3 columnas en pantallas medianas y mayores
                    lg={4}    // 3 columnas en pantallas grandes
                    key={index}
                >
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={bodega.img}
                            alt={bodega.name}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {bodega.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {bodega.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={bodega.website}
                                target="_blank"
                                sx={{ mt: 2 }}
                            >
                                Visitar sitio web
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Bodegas;
