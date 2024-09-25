import React from 'react';
import './OfertaEdu.css';

const OfertaEdu = () => {
  return (
    <div className="offer-container">
      {/* Sección de Programas / Carreras */}
      <section className="programs-section">
        <h2>Carreras y Programas</h2>
        <div className="program-list">
          <a href="https://ies9023-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-enologia-e-industrias-alimentarias/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="/img/f1280x720-168780_300455_5050.jpg" alt="Carrera 1" />
              <h3>Tecnicatura en Enología e Industrias del Alimento</h3>
              <p>Instituto Educación Superior 9-023 Maipú.</p>
            </div>
          </a>

          <a href="https://www.umaza.edu.ar/landings/enologia/inicio" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="/img/WEB-ActoUMaza60Int2.jpg" alt="Carrera 2" />
              <h3>Licenciatura e Ingeniería en Enología</h3>
              <p>Facultad de Ingeniería y Enología - Universidad Juan Agustín Maza.</p>
            </div>
          </a>

          <a href="https://www4.frm.utn.edu.ar/tecnicatura-superior-enologia/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\fce4ed7b-5493-474d-beca-f8b9653e2de4.jpg" alt="Carrera 3" />
              <h3>Tecnicatura Universitaria en Enología</h3>
              <p>Universidad Tecnológica Nacional (Sede Mendoza).</p>
            </div>
          </a>

          <a href="https://www.umaza.edu.ar/landings/sommelier/index.php" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="/img/WEB-ActoUMaza60Int2.jpg" alt="Carrera 4" />
              <h3>Sommelier Universitario</h3>
              <p>Facultad de Ingeniería y Enología - Universidad Juan Agustín Maza.</p>
            </div>
          </a>

          <a href="https://ens9001-infd.mendoza.edu.ar/sitio/enologia-e-industrias-frutihorticolas/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\f1280x720-148313_279988_5050.jpg" alt="Carrera 5" />
              <h3>Tecnicatura en Enología e Industrias de los Alimentos</h3>
              <p>Instituto Educación Superior 9-001 San Martin.</p>
            </div>
          </a>

          <a href="https://iesvu.edu.ar/estudio/tecnicatura-superior-en-enologia-e-industrias-alimentos/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\drone_sede_central_3.jpg" alt="Carrera 6" />
              <h3>Tecnicatura en Enología e Industrias de los Alimentos</h3>
              <p>Instituto Educación Superior 9-015 Valle de Uco.</p>
            </div>
          </a>

          <a href="https://ies9009-infd.mendoza.edu.ar/sitio/" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\0f5c96af-3f30-4be9-ad91-1e5e3c038db7.jpg" alt="Carrera 7" />
              <h3>Tecnicatura en Enología e Industrias de los Alimentos</h3>
              <p>Instituto Educación Superior 9-009 Tupungato.</p>
            </div>
          </a>

          <a href="https://fca.uncuyo.edu.ar/estudios/carrera/tecnicatura-universitaria-en-enologia-y-viticultura" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\d19bcb59a35c4170403a6799a2f56fc6_280_650_c.jpg" alt="Carrera 8" />
              <h3>Tecnicatura Universitaria en Enología y Viticultura</h3>
              <p>Facultad de Ciencias Agrarias - Universidad Nacional de Cuyo.</p>
            </div>
          </a>

          <a href="https://fcai.uncuyo.edu.ar/estudios/carrera/ciclo-de-licenciatura-en-enologia" className="program-link" target="_blank" rel="noopener noreferrer">
            <div className="program-card">
              <img src="\img\uncuyo-s-rafael-13-1_546_966.jpg" alt="Carrera 9" />
              <h3>Ciclo de Complementación Curricular Licenciatura en Enología</h3>
              <p>Facultad de Ciencias Aplicadas a la Industria - Universidad Nacional de Cuyo (Sede San Rafael).</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default OfertaEdu;
