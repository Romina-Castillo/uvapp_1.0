import React from 'react';
import './About.css';

const HistoriaEmpresa = () => {
  return (
    <div className="historia-container">
      <div className="banner">
        <h1>Nuestra Historia</h1>
      </div>
      <section className="historia-content">
        <div className="historia-texto">
          <h2>Sobre nosotros</h2>
          <p>
          Nuestra aplicación, creada por dos alumnas de la carrera de Tecnicatura en Desarrollo de Software, se dedica a educar y difundir el conocimiento sobre el mundo del vino en Mendoza, promoviendo la inclusión, el turismo y la apreciación de la cultura vitivinícola de la región. A través de contenido de calidad y experiencias únicas, buscamos conectar a turistas y residentes con la riqueza cultural de la industria del vino.
          </p>
        </div>
        <div className="historia-texto">
          <h2>Misión y visión</h2>
          <p>
          Nos comprometemos a ser la principal fuente de información sobre el mundo y la cultura del vino en Mendoza. A través de nuestra aplicación, buscamos promover la cultura vitivinícola y ofrecer experiencias exclusivas y educativas en colaboración con bodegas e industrias locales, fortaleciendo así el turismo y la cultura de la región.
          </p>
        </div>
        <div className="historia-texto">
          <h2>Nuestra aplicación</h2>
          <p>
          Nuestra aplicación está diseñada con un enfoque en la orientación, educación e inclusión, facilitando la generación de reservas para experiencias únicas. Guiamos a turistas y personas interesadas en explorar Mendoza y realizar visitas a bodegas, mientras ampliamos nuestro alcance a aquellos que desean aprender sobre la cultura del vino y otras industrias locales. También ofrecemos opciones como el "vino sin alcohol", permitiendo la participación de embarazadas, menores de edad y madres lactantes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HistoriaEmpresa;
