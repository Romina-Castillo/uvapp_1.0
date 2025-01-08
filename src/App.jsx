import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/Spinner"; // Spinner
import Footer from "./components/footer/Footer";
import Home from "./views/Home";
import Login from "./Login";
import Register from "./Register";
import Bodegas from "./views/Bodegas";
import OfertaEdu from "./views/OfertaEdu";
import Eventos from "./views/Eventos";
import Contact from "./views/Contact";
import Industrias from "./views/Industrias";
import Reservas from "./views/Reservas";
import FormReservas from "./views/FormReservas";
import UsuarioGestion from "./views/UsuarioGestion";
import About from "./About";
import Transicciones from "./Transicciones";
import Usuario_reservas from "./views/usuario_reservas";
import ScrollToTop from "./ScrollToTop";
import EntityPage from "./routes/EntityPage";
import "./App.css";

const navArrayLinks = [
  { title: "Home", path: "/" },
  { title: "Bodegas", path: "/bodegas" },
  { title: "Industrias", path: "/industrias" },
  { title: "Oferta Educativa", path: "/OfertaEdu" },
  { title: "Eventos", path: "/Eventos" },
  { title: "Sobre Nosotros", path: "/about" },
];

export default function App() {
  const [loading, setLoading] = useState(false); // Estado del spinner
  const location = useLocation(); // Detecta cambios de ruta

  useEffect(() => {
    // Mostrar el spinner al cambiar de ruta
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simula un retraso
    return () => clearTimeout(timer); // Limpia el temporizador
  }, [location]);

  return (
    <>
      {loading && <Spinner />} {/* Mostrar spinner mientras carga */}
      <Navbar navArrayLinks={navArrayLinks} />
      <ScrollToTop />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Transicciones><Home /></Transicciones>} />
          <Route path="/login" element={<Transicciones><Login /></Transicciones>} />
          <Route path="/register" element={<Transicciones><Register /></Transicciones>} />
          <Route path="/bodegas" element={<Transicciones><Bodegas /></Transicciones>} />
          <Route path="/industrias" element={<Transicciones><Industrias /></Transicciones>} />
          <Route path="/OfertaEdu" element={<Transicciones><OfertaEdu /></Transicciones>} />
          <Route path="/eventos" element={<Transicciones><Eventos /></Transicciones>} />
          <Route path="/Contact" element={<Transicciones><Contact /></Transicciones>} />
          <Route path="/reservas" element={<Transicciones><Reservas /></Transicciones>} />
          <Route path="/UsuarioGestion" element={<Transicciones><UsuarioGestion /></Transicciones>} />
          <Route path="/formReservas" element={<Transicciones><FormReservas /></Transicciones>} />
          <Route path="/About" element={<Transicciones><About /></Transicciones>} />
          <Route path="/Usuario_reservas" element={<Transicciones><Usuario_reservas /></Transicciones>} />
          <Route path="/bodega/:name" element={<EntityPage entityType="bodega" />} />
          <Route path="/industrias/:name" element={<EntityPage entityType="industria" />} />
          <Route path="/eventos/:name" element={<EntityPage entityType="evento" />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
