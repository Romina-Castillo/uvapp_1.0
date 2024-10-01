
import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import Bodegas from "./views/Bodegas";
import OfertaEdu from "./views/OfertaEdu";
import Eventos from "./views/Eventos";
import Footer from "./components/footer/Footer";
import Contact from "./views/Contact";
import Bodegas2 from "./views/Bodegas2";
import Reservas from "./views/Reservas";
import FormReservas from "./views/FormReservas"
import Usuario from "./views/usuario";
import About from "./About";

// en esta const solo poner lo que queremos que aparezca en la parte superior, en la navbar
const navArrayLinks = [
  {   
      title: "Home", 
      path: "/", 
      icon: <HomeIcon />
  },
  {
      title: "Bodegas",
      path: "/bodegas"
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
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bodegas" element={<Bodegas />} />
          <Route path="/pagina2" element={<Bodegas2 />} />          
          <Route path="/OfertaEdu" element={<OfertaEdu />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/formReservas" element={<FormReservas />} />
          <Route path="/About" element={<About />} />

        </Routes>
        
      </Container>
      <Footer />
    </>
    
  );
}
