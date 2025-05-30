const express = require('express');
const path = require('path');
const router = express.Router();
const { enviarDatos } = require('../controllers/formController');

// Página principal
router.get('/', (req, res) => {
  res.send('<h1>Bienvenido al servidor</h1><p><a href="/formulario">Ir al formulario</a></p>');
});

// Mostrar el formulario
router.get('/formulario', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/formulario.html'));
});

// Procesar datos del formulario
router.post('/enviar-datos', enviarDatos);

module.exports = router;
