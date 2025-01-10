// server/app.js
const express = require('express');
const dotenv = require('dotenv');

// Configuración de variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rutas
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
