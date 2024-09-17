import React from 'react';
import './OfertaEdu.css';

const OfertaEdu = () => {
  return (

    <div className="offer-container">


      {/* Sección Principal de Oferta Educativa */}
      <div className="main-content">
        <div className="main-banner">
          <img src="\img\2733_es.jpg" alt="Oferta Educativa" className="banner-image" />
          <div className="banner-text">
            <h1>Oferta Educativa</h1>
            <h2>"Conviértete en el maestro detrás de cada copa: Estudia enología."</h2>
            <p>
                Encuentra tu camino en los mejores terciarios y universidades de Mendoza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertaEdu;
