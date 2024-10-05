import React, { useState } from 'react';
import './OfertaEdu.css';

const OfertaEdu = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      title: 'Tecnicatura en Enología e Industrias del Alimento',
      description: 'Instituto Educación Superior 9-023 Maipú.',
      link: 'https://ies9023-infd.mendoza.edu.ar/sitio/tecnicatura-superior-en-enologia-e-industrias-alimentarias/',
    },
    {
      title: 'Licenciatura e Ingeniería en Enología',
      description: 'Facultad de Ingeniería y Enología - Universidad Juan Agustín Maza.',
      link: 'https://www.umaza.edu.ar/landings/enologia/inicio',
    },
    {
      title: 'Tecnicatura Universitaria en Enología',
      description: 'Universidad Tecnológica Nacional (Sede Mendoza).',
      link: 'https://www4.frm.utn.edu.ar/tecnicatura-superior-enologia/',
    },
    {
      title: 'Complementación Sommelier Universitario',
      description: 'Facultad de Ingeniería y Enología - Universidad Juan Agustín Maza.',
      link: 'https://www.umaza.edu.ar/landings/sommelier/index.php',
    },
    {
      title: 'Tecnicatura en Enología e Industrias de los Alimentos',
      description: 'Instituto Educación Superior 9-001 San Martin.',
      link: 'https://ens9001-infd.mendoza.edu.ar/sitio/enologia-e-industrias-frutihorticolas/',
    },
    {
      title: 'Tecnicatura en Enología e Industrias de los Alimentos',
      description: 'Instituto Educación Superior 9-015 Valle de Uco.',
      link: 'https://iesvu.edu.ar/estudio/tecnicatura-superior-en-enologia-e-industrias-alimentos/',
    },
    {
      title: 'Tecnicatura en Enología e Industrias de los Alimentos',
      description: 'Instituto Educación Superior 9-009 Tupungato.',
      link: 'https://ies9009-infd.mendoza.edu.ar/sitio/',
    },
    {
      title: 'Tecnicatura Universitaria en Enología y Viticultura',
      description: 'Facultad de Ciencias Agrarias - Universidad Nacional de Cuyo.',
      link: 'https://fca.uncuyo.edu.ar/estudios/carrera/tecnicatura-universitaria-en-enologia-y-viticultura',
    },
    {
      title: 'Ciclo de Complementación Curricular Licenciatura en Enología',
      description: 'Universidad Nacional de Cuyo (Sede San Rafael).',
      link: 'https://fcai.uncuyo.edu.ar/estudios/carrera/ciclo-de-licenciatura-en-enologia',
    },
  ];

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="offer-container">
      <section className="programs-section">
        <h2>Oferta Educativa</h2>
        <div className="program-list">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="program-card" 
              onClick={() => handleProgramClick(program)}
            >
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProgram && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ animation: 'fadeIn 0.3s' }}
          >
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>{selectedProgram.title}</h2>
            <p>{selectedProgram.description}</p>
            <a 
              href={selectedProgram.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ir al Programa
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfertaEdu;
