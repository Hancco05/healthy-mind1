import React from 'react';
import '../styles/styles.css';

function ResourcesPage() {
  return (
    <div className="resources-container">
      <h1>Recursos de Salud Mental</h1>
      <p>
        Aquí encontrarás una variedad de recursos útiles para aprender más sobre la salud mental 
        y cómo cuidarte mejor.
      </p>
      <h2>Recursos Disponibles</h2>
      <ul>
        <li>
          <a href="https://www.who.int/es/news-room/fact-sheets/detail/mental-health-strengthening-our-response" target="_blank" rel="noopener noreferrer">
            Organización Mundial de la Salud: Salud Mental
          </a>
        </li>
        <li>
          <a href="https://www.nimh.nih.gov/health/topics" target="_blank" rel="noopener noreferrer">
            Instituto Nacional de Salud Mental (NIMH)
          </a>
        </li>
        <li>
          <a href="https://www.mind.org.uk/" target="_blank" rel="noopener noreferrer">
            Mind: Recursos y Consejos de Salud Mental
          </a>
        </li>
        <li>
          Líneas de ayuda locales para personas en crisis: [Incluye aquí líneas de ayuda específicas para tu país o región].
        </li>
      </ul>
      <h2>Consejos para Mejorar tu Salud Mental</h2>
      <ol>
        <li>Habla con alguien en quien confíes sobre cómo te sientes.</li>
        <li>Realiza actividad física regularmente.</li>
        <li>Duerme lo suficiente y sigue una dieta equilibrada.</li>
        <li>Dedica tiempo a tus pasatiempos o actividades que disfrutes.</li>
        <li>Aprende técnicas de relajación, como la meditación o la respiración profunda.</li>
      </ol>
      <p>
        Estos son solo algunos consejos para mantener una buena salud mental. Cada persona es diferente, 
        así que encuentra lo que mejor funcione para ti.
      </p>
    </div>
  );
}

export default ResourcesPage;
