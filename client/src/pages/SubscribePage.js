import React, { useState } from 'react';
import '../styles/styles.css';


function SubscribePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.');
    setEmail('');
  };

  return (
    <div className="subscribe-page">
      <h1>Suscríbete para recibir actualizaciones</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default SubscribePage;
