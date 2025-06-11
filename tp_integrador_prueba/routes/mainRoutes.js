const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Mostrar formulario de datos
router.get('/datos', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/datos.html'));
});

// Mostrar datos enviados
router.post('/mostrar-datos', mainController.mostrarDatos);

// Mostrar formulario de saludo
router.get('/saludo', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/saludo.html'));
});

// Recibir saludo y mostrar respuesta
router.post('/saludo-respuesta', mainController.saludoRespuesta);

// Devolver hora actual del servidor
router.get('/hora', mainController.horaActual);

module.exports = router;