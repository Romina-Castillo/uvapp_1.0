import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import Bodegas from "./views/Bodegas";
import OfertaEdu from "./views/OfertaEdu";
import Eventos from "./views/Eventos";
import Footer from "./components/footer/Footer";
import Contact from "./views/Contact";
import Industrias from "./views/Industrias";
import Reservas from "./views/Reservas";
import FormReservas from "./views/FormReservas";
import Usuario from "./views/usuario";
import About from "./About";
import Transicciones from './Transicciones';
import Usuario_reservas from './views/usuario_reservas';
import ScrollToTop from './ScrollToTop'; // Importa el componente
import EntityPage from './routes/EntityPage';
import './App.css';

// en esta const solo poner lo que queremos que aparezca en la parte superior, en la navbar
const navArrayLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Bodegas",
    path: "/bodegas"
  },
  {
    title: "Industrias",
    path: "/industrias"
  },
  {
    title: "Oferta Educativa",
    path: "/OfertaEdu"
  },
  {
    title: "Eventos",
    path: "/Eventos"
  }
];

export default function App() {
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <ScrollToTop /> {/* Añade el componente aquí */}
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
          <Route path="/Usuario" element={<Transicciones><Usuario /></Transicciones>} />
          <Route path="/formReservas" element={<Transicciones><FormReservas /></Transicciones>} />
          <Route path="/About" element={<Transicciones><About /></Transicciones>} />
          <Route path="/Usuario_reservas" element={<Transicciones><Usuario_reservas /></Transicciones>} />
          <Route path="/bodega/:name" element={<EntityPage entityType="bodega" />} />
          <Route path="/industrias/:name" element={<EntityPage entityType="industria" />} />
          <Route path="/eventos/:name" element={<EntityPage entityType="evento" />} />
          {/* <Route path="/eventos/:name" element={<EntityPage />} /> */}
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
