import React, { useState } from 'react';
import '../styles/styles.css';

function SubscribePage() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    emailInquiry: '',
    description: '',
    file: null,
  });

  // Función para manejar la suscripción
  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert('Te has suscrito con éxito.');
        setEmail('');
      } else {
        alert('Hubo un error al suscribirte. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert('Hubo un error al suscribirte. Inténtalo de nuevo.');
    }
  };

  // Función para manejar el envío de la consulta
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    const { fullName, subject, emailInquiry, description, file } = formData;

    const formPayload = new FormData();
    formPayload.append('fullName', fullName);
    formPayload.append('subject', subject);
    formPayload.append('email', emailInquiry);
    formPayload.append('description', description);
    if (file) {
      formPayload.append('file', file);
    }

    try {
      const response = await fetch('http://localhost:5000/api/send-query', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        alert('Tu consulta ha sido enviada con éxito.');
        setFormData({
          fullName: '',
          subject: '',
          emailInquiry: '',
          description: '',
          file: null,
        });
      } else {
        alert('Hubo un error al enviar tu consulta. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert('Hubo un error al enviar tu consulta. Inténtalo de nuevo.');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 30 * 1024 * 1024) {
      setFormData((prevData) => ({
        ...prevData,
        file: file,
      }));
    } else {
      alert('El archivo es demasiado grande. El tamaño máximo es de 30 MB.');
    }
  };

  return (
    <div className="resources-container">
      <h1>Suscríbete para recibir actualizaciones sobre Salud Mental</h1>
      <form onSubmit={handleSubscribeSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Suscribirse</button>
      </form>

      <h1>Envía tus dudas</h1>
      <form onSubmit={handleInquirySubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Nombre completo"
          value={formData.fullName}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleFormChange}
          required
        />
        <input
          type="email"
          name="emailInquiry"
          placeholder="Correo electrónico"
          value={formData.emailInquiry}
          onChange={handleFormChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleFormChange}
          required
        />
        <input
          type="file"
          name="file"
          accept=".pdf,.doc,.docx,.jpg,.png"
          onChange={handleFileChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default SubscribePage;
