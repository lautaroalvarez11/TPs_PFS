const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// middleware para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// archivos estáticos (formulario.html, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ---  MOTOR DE VISTAS  ---
app.set('view engine', 'hbs');                   // Que use handlebars
app.set('views', path.join(__dirname, 'views')); // Carpeta donde está respuesta.hbs

// rutas
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
