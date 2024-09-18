import React from 'react';
import './OfertaEdu.css';

const OfertaEdu = () => {
  return (
    <div className="offer-container">
      {/* Sección Principal de Oferta Educativa */}
      <section className="main-banner">
        <img src="/img/2733_es.jpg" alt="Oferta Educativa" className="banner-image" />
        <div className="banner-text">
          <h1>Oferta Educativa</h1>
          <h2>"Conviértete en el maestro detrás de cada copa: Estudia enología."</h2>
          <p>Encuentra tu camino en los mejores terciarios y universidades de Mendoza.</p>
        </div>
      </section>

      {/* Sección de Programas / Carreras */}
      <section className="programs-section">
        <h2>Nuestras Carreras y Programas</h2>
        <div className="program-list">

          {/* Tarjeta 1 */}
          <a href="https://ies9023-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-enologia-e-industrias-alimentarias/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="/img/f1280x720-168780_300455_5050.jpg" alt="Carrera 1" />
              <h3>Tecnicatura en Enología e Industrias del Alimento</h3>
              <p>Instituto Educación Superior 9-023 Maipú.</p>
            </div>
          </a>

          {/* Tarjeta 2 */}
          <a href="https://www.umaza.edu.ar/landings/enologia/inicio" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="/img/WEB-ActoUMaza60Int2.jpg" alt="Carrera 2" />
              <h3>Licenciatura e Ingeniería en Enología</h3>
              <p>Facultad de Ingeniería y Enología - Universidad Juan Agustín Maza.</p>
            </div>
          </a>

          {/* Tarjeta 3 */}
          <a href="https://www4.frm.utn.edu.ar/tecnicatura-superior-enologia/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\fce4ed7b-5493-474d-beca-f8b9653e2de4.jpg" alt="Carrera 3" />
              <h3>Tecnicatura Universitaria en Enología</h3>
              <p>Universidad Tecnológica Nacional(Sede Mendoza).</p>
            </div>
          </a>

        </div>
      </section>
    </div>
  );
};

export default OfertaEdu;

