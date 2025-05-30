const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Se definen las rutas
router.get('/app', mainController.appInfo);
router.get('/contacto', mainController.contacto);
router.get('/pagina', mainController.mostrarPagina);

module.exports = router;