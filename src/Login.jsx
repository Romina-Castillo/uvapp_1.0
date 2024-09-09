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
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setError((prevError) => ({
        ...prevError,
        email: {
          error: true,
          message: "El mail no es válido",
        },
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        email: {
          error: false,
          message: "El mail se agregó exitosamente",
        },
      }));
    }

    if (!isPasswordValid) {
      setError((prevError) => ({
        ...prevError,
        password: {
          error: true,
          message: "La contraseña debe tener al menos 6 caracteres",
        },
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        password: {
          error: false,
          message: "Contraseña correcta",
        },
      }));
    }

    if (isEmailValid && isPasswordValid) {
      console.log("Formulario enviado correctamente");
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
