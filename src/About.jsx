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
          Somos dos alumnas de la Tecnicatura en Desarrollo de Software que creamos esta aplicación con el objetivo de educar y difundir el conocimiento sobre el mundo del vino en Mendoza. Nuestra propuesta busca promover la inclusión, el turismo y la apreciación de la cultura vitivinícola de la región. A través de contenido de calidad y experiencias auténticas, conectamos a turistas y residentes con la riqueza cultural de la industria del vino y otras actividades locales que hacen única a nuestra provincia.
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
          Nuestra aplicación está diseñada con un enfoque educativo, inclusivo y orientador, poniendo en el centro la cultura del vino. Facilitamos la reserva de experiencias únicas que no solo permiten recorrer bodegas y explorar Mendoza, sino también aprender sobre el mundo del vino y su importancia en la región. Nos dirigimos tanto a turistas como a personas interesadas en formarse en esta área, promoviendo el conocimiento y la valoración de las industrias locales.

Además, fomentamos la participación de embarazadas, madres lactantes y menores de edad a través de propuestas especialmente adaptadas, como visitas sin degustación, para que todos puedan disfrutar y aprender sin restricciones.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HistoriaEmpresa;
