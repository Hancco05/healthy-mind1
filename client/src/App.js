import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import SubscribePage from './pages/SubscribePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';  // Importa la nueva página de privacidad
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <header className="app-header">
          <h1>Health Mind</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/resources">Recursos</Link></li>
              <li><Link to="/subscribe">Suscribirse</Link></li>
            </ul>
          </nav>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} /> {/* Ruta para la política de privacidad */}
          </Routes>
        </div>

        <footer className="app-footer">
          <p>&copy; 2025 Salud Mental. Todos los derechos reservados.</p>
          <p><Link to="/privacy">Política de privacidad</Link></p> {/* Enlace a la política de privacidad */}
        </footer>
      </Router>
    </div>
  );
}

export default App;
