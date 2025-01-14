import React, { useState } from 'react'; // Asegúrate de importar React y useState
import '../styles/styles.css'; // Estilos

function SubscribePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el correo
    alert(`Te has suscrito con el email: ${email}`);
  };

  return (
    <div className="subscribe-container">
      <h1>Suscríbete para recibir actualizaciones sobre Salud Mental</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
}

export default SubscribePage;
