import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const AccountManagement = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para guardar los datos
    // Ejemplo: llamada a la API para actualizar el usuario
    try {
      const response = await fetch('/api/actualizar-cuenta', { // Cambia la URL a tu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar los datos');
      }

      // Si la actualización es exitosa
      console.log('Datos actualizados:', userData);
      alert('Los datos se han actualizado correctamente.');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al actualizar los datos.');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gestión de Cuenta
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre de Usuario"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Dirección de Email"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contraseña"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Guardar Cambios
        </Button>
      </form>
    </Box>
  );
};

export default AccountManagement;
