import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import './Register.css';

export default function Register() {
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

  const handlerSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    if (!username) {
      setError((prevError) => ({
        ...prevError,
        username: {
          error: true,
          message: "El nombre de usuario es requerido",
        },
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        username: {
          error: false,
          message: "",
        },
      }));
    }

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
          message: "",
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
          message: "",
        },
      }));
    }

    if (!isConfirmPasswordValid) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: {
          error: true,
          message: "Las contraseñas no coinciden",
        },
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: {
          error: false,
          message: "",
        },
      }));
    }

    if (username && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
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
