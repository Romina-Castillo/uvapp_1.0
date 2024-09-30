import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const bodegasData = [
    {
        name: "Bodega Andeluna",
        description: "Una descripción breve de la Andeluna.",
        img: "/img/bodega-andeluna.jpg",
        website: "https://wineobs.com.ar/mro/andeluna"
    },
    {
        name: "Bodega Séptima",
        description: "Una descripción breve de la Bodega Séptima.",
        img: "/img/bodega-septima.jpg",
        website: "https://www.bodegaseptima.com/enoturismo/"
    },
    {
        name: "Bodega Salentein",
        description: "Una descripción breve de la Bodega Salentein.",
        img: "/img/bodega-salentein.jpg",
        website: "https://www.bodegasalentein.com/reservas"
    },
    {
        name: "Bodega Trapiche",
        description: "Una descripción breve de la Bodega Trapiche.",
        img: "/img/bodega-trapiche.jpeg",
        website: "https://trapiche-costaypampa.meitre.com/"
    },
    {
        name: "Bodega Achaval",
        description: "Una descripción breve de la Bodega Achaval-Ferrer.",
        img: "/img/bodega-achaval.jpg",
        website: "https://meitre.com/es/quimera-achaval"
    },
    {
        name: "Bodega Lopez",
        description: "Una descripción breve de la Bodega Lopez.",
        img: "/bodega-lopez.jpg",
        website: "https://experiencias.bodegaslopez.com.ar/"
    },
    {
        name: "Casa Vigil",
        description: "Una descripción breve de la Casa Vigil.",
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
        name: "Bodega Chandon",
        description: "Una descripción breve de la Bodega Chandon.",
        img: "/img/Bodega-Chandon.jpg",
        website: "https://www.chandon.com.ar/nuestra-bodega/"
    }
];

const Bodegas = () => {
    return (
        <Grid 
            container 
            spacing={3} // columnas 3
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
