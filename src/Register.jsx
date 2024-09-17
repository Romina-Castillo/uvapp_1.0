import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    username: {
      error: false,
      message: "",
    },
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
    confirmPassword: {
      error: false,
      message: "",
    },
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    if (username && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword,
          }),
        });
    
        if (response.ok) {
          // captura el nombre de usuario ingresado y guarda este en localStorage y redirige a la vista del perfil logueado
          localStorage.setItem("username", username);
          console.log('Usuario registrado exitosamente');
          // Redirigir al login después de registro exitoso
          navigate('/login');
        } else {
          console.log('Error al registrar usuario');
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
      }
    }    
  };


  return (
    <div className="background">
      <header className="header">
        <div className="app-title">UVAPP</div>
      </header>

      <Box component="form" className="form-container" onSubmit={handlerSubmit}>
        <TextField
          id="username"
          label="Nombre de usuario"
          variant="outlined"
          fullWidth
          required
          error={error.username.error}
          helperText={error.username.message}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          error={error.email.error}
          helperText={error.email.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          sx={{ mt: 2 }}
        />
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          required
          error={error.password.error}
          helperText={error.password.message}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          sx={{ mt: 2 }}
        />
        <TextField
          id="confirm-password"
          label="Confirmar contraseña"
          type="password"
          variant="outlined"
          fullWidth
          required
          error={error.confirmPassword.error}
          helperText={error.confirmPassword.message}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
          sx={{ mt: 2 }}
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth
          className="register-button"
          sx={{ mt: 2 }}
        >
          Registrarse
        </Button>
      </Box>
    </div>
  );
}
