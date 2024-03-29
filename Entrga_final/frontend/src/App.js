
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import Servicios from "./pages/Servicios";
import TrabajosRealizados from "./pages/TrabajosRealizados";
import Novedad from "./pages/Novedad";
import Contacto from "./pages/Contacto";
import Maj from "./pages/Maj";



function App() {
  return (
    <div className="App">

      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Maj />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="TrabajosRealizados" element={<TrabajosRealizados />} />
          <Route path="Novedad" element={<Novedad />} />
          <Route path="Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />

    </div>
  );
}

export default App;
