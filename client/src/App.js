import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import SubscribePage from './pages/SubscribePage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/resources">Recursos</Link></li>
          <li><Link to="/subscribe">Suscribirse</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>
    </Router>
  );
}

export default App;
