import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  const bodegas = [
    { id: 1, nombre: 'Bodega Chandon', imagen: '', link: '/bodega1' },
    { id: 2, nombre: 'Bodega Lopez', imagen: '', link: '/bodega2' },
    { id: 3, nombre: 'Bodega Saleinten', imagen: '', link: '/bodega3' },
    // Agrega más bodegas según sea necesario
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {bodegas.map((bodega, index) => (
          <Grid key={index} xs={2} sm={4} md={4}>
            <Item>
              <img src={bodega.imagen} alt={bodega.nombre} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h6" gutterBottom>
                {bodega.nombre}
              </Typography>
              <Button variant="contained" color="primary" href={bodega.link}>
                Ver más
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
