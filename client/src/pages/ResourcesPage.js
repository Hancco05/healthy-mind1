import React from 'react';

function ResourcesPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recursos de Salud Mental</h1>
      <p>
        Aquí encontrarás una variedad de recursos útiles para aprender más sobre la salud mental 
        y cómo cuidarte mejor. Recuerda, siempre es válido buscar ayuda y apoyarte en herramientas confiables.
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
          <a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer">
            Administración de Servicios de Salud Mental y Abuso de Sustancias (SAMHSA)
          </a>
        </li>
        <li>
          <a href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer">
            Psychology Today: Encuentra un terapeuta
          </a>
        </li>
        <li>
          Líneas de ayuda locales para personas en crisis:
          <ul>
            <li><strong>Chile:</strong> Línea 600 360 7777 del Ministerio de Salud.</li>
            <li><strong>México:</strong> SAPTEL: 800 472 7835.</li>
            <li><strong>España:</strong> Teléfono contra el suicidio: 024.</li>
          </ul>
        </li>
      </ul>
      
      <h2>Consejos para Mejorar tu Salud Mental</h2>
      <ol>
        <li>Habla con alguien en quien confíes sobre cómo te sientes.</li>
        <li>Realiza actividad física regularmente para liberar tensiones.</li>
        <li>Duerme lo suficiente y sigue una dieta equilibrada.</li>
        <li>Dedica tiempo a tus pasatiempos o actividades que disfrutes.</li>
        <li>Aprende técnicas de relajación, como la meditación o la respiración profunda.</li>
        <li>Evita el consumo excesivo de alcohol y sustancias nocivas.</li>
        <li>Establece metas alcanzables y celebra tus logros, por pequeños que sean.</li>
      </ol>

      <h2>Apps y Herramientas Útiles</h2>
      <ul>
        <li>
          <a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer">
            Headspace: Meditación y Mindfulness
          </a>
        </li>
        <li>
          <a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer">
            Calm: Relajación y Sueño
          </a>
        </li>
        <li>
          <a href="https://www.moodpath.de/en/" target="_blank" rel="noopener noreferrer">
            Moodpath: Seguimiento de tu salud mental
          </a>
        </li>
        <li>
          <a href="https://www.sanvello.com/" target="_blank" rel="noopener noreferrer">
            Sanvello: Apoyo para la ansiedad y la depresión
          </a>
        </li>
      </ul>

      <h2>Cómo Buscar Ayuda</h2>
      <p>
        Si sientes que necesitas apoyo profesional, considera contactar a un terapeuta o consejero en tu área. 
        Muchos profesionales ahora ofrecen consultas en línea, lo que puede ser una opción accesible y cómoda.
      </p>
      
      <h2>Comunidades de Apoyo</h2>
      <p>
        Unirse a grupos de apoyo o comunidades puede ser muy útil. Conectar con personas que están pasando 
        por experiencias similares puede ayudarte a sentirte comprendido y menos solo. Busca foros, grupos 
        en redes sociales o reuniones locales que se enfoquen en el bienestar mental.
      </p>
      
      <p>
        Recuerda: buscar ayuda es un signo de fortaleza, no de debilidad. Tu bienestar importa.
      </p>
    </div>
  );
}

export default ResourcesPage;
