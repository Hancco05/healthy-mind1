import React, { useState, useEffect } from 'react';
// Importar las imágenes directamente desde src/img/
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import '../styles/styles.css';

function ImageSlider() {
  const images = [image1, image2, image3]; // Usar las imágenes importadas

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image} // Aquí ya usamos la imagen importada
          alt={`slider-${index}`}
          className={`slider-image ${currentIndex === index ? 'active' : ''}`}
        />
      ))}
      
      <div className="slider-navigation">
        <button className="slider-nav-button" onClick={prevImage}>‹</button>
        <button className="slider-nav-button" onClick={nextImage}>›</button>
      </div>
    </div>
  );
}

export default ImageSlider;
