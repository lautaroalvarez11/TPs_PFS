const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para leer formularios
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos (formularios HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Motor de plantillas Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});