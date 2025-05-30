const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos (como el HTML)
app.use(express.static('public'));

// Se importan y se usan rutas
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// Se inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
