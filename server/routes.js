// server/routes.js
const express = require('express');
const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de health-mental-app!');
});

module.exports = router;
