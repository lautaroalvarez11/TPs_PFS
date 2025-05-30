const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Página de inicio (menú principal)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Formulario de datos personales
router.get('/datos', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/datos.html'));
});

// Procesamiento de datos enviados desde /datos
router.post('/mostrar-datos', mainController.mostrarDatos);

// Formulario de saludo
router.get('/saludo', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/saludo.html'));
});

// Procesamiento del saludo enviado
router.post('/saludo-respuesta', mainController.saludoRespuesta);

// Mostrar hora actual del servidor en formato JSON
router.get('/hora', mainController.horaActual);

module.exports = router;