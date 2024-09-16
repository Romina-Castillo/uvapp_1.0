import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import './Login.css'; 
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
    login: {
      error: false,
      message: "",
    }
  });
  

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
  
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
  
    if (!isEmailValid || !isPasswordValid) return;
  
    // Realizar la solicitud al backend
    try {
      console.log(email, password)
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log
  
      if (response.ok) {
        // Redirigir si el login es exitoso
        navigate('/');
      } else {
        // Mostrar error si el login falla
        setError((prevError) => ({
          ...prevError,
          login: {
            error: true,
            message: data.message || 'Error al iniciar sesión. Verifica tus credenciales.',
          },
        }));
      }
    } catch (error) {
      setError((prevError) => ({
        ...prevError,
        login: {
          error: true,
          message: 'Error en el servidor. Intenta nuevamente más tarde.',
        },
      }));
    }
  };
  

  return (
    <div className="background">
      <header className="header">
        <div className="app-title">UVAPP</div>
      </header>

      <Box component="form" className="form-container" onSubmit={handlerSubmit}>
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
        {error.login.error && (
          <div style={{ color: 'red', marginTop: '10px' }}>{error.login.message}</div>
          )}

        <Button
          type="submit"
          variant="outlined"
          fullWidth
          className="login-button"
          sx={{ mt: 2 }}
        >
          Iniciar sesión
        </Button>
        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
        <Button
          variant="contained"
          fullWidth
          className="facebook-button"
          sx={{ mt: 2 }}
        >
          Conectarse con Facebook
        </Button>
        <Button
          variant="outlined"
          fullWidth
          className="register-button"
          onClick={() => navigate("/register")}
          sx={{ mt: 2 }}
        >
          Registrarse
        </Button>
      </Box>
    </div>
  );
}
