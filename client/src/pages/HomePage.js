import React from 'react';
import '../styles/styles.css';
import ImageSlider from './ImageSlider'; // Importar el componente ImageSlider

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Slider de imágenes */}
      <ImageSlider />
      
      <h1>Bienvenido a la Salud Mental</h1>
      <p>
        La salud mental es una parte esencial de nuestro bienestar general. Incluye 
        nuestro bienestar emocional, psicológico y social, y afecta cómo pensamos, sentimos y actuamos. 
        Además, determina cómo manejamos el estrés, nos relacionamos con los demás y tomamos decisiones.
      </p>
      <h2>Importancia de la Salud Mental</h2>
      <ul>
        <li>Ayuda a construir relaciones saludables.</li>
        <li>Permite manejar el estrés de manera efectiva.</li>
        <li>Contribuye a una mayor productividad en la vida diaria.</li>
        <li>Previene trastornos mentales y emocionales.</li>
      </ul>
      <p>
        Recuerda, cuidar de tu salud mental es tan importante como cuidar de tu salud física. 
        Si necesitas ayuda, no dudes en buscarla.
      </p>
    </div>
  );
}

export default HomePage;
