
import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import Bodegas from "./views/Bodegas";

const navArrayLinks = [
  {   
      title: "Home", 
      path: "/", 
      icon: <HomeIcon />
  },
  {
      title: "Bodegas",
      path: "/bodegas"
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
        </Routes>
      </Container>

    </>
    
  );
}
