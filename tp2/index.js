// TP 2

/*
PUNTO 2:
Express.js es un framework minimalista y flexible para aplicaciones web que se ejecuta sobre Node.js.
Es ampliamente utilizado en la industria tecnológica por su eficiencia y sencillez.

Ventajas de Express en el desarrollo web:
1. Simplicidad y rapidez: Permite crear aplicaciones web y APIs de forma rápida con menos líneas de código.
2. Middleware: Permite el uso de funciones intermedias para manejar peticiones HTTP, autenticación, manejo de errores, etc.
3. Routing: Tiene un sistema de enrutamiento sencillo y poderoso.
4. Gran comunidad y documentación: Al ser uno de los frameworks más populares, cuenta con abundante documentación, tutoriales y soporte.
5. Compatibilidad: Se integra fácilmente con bases de datos como MongoDB, MySQL, PostgreSQL y otros paquetes npm.
6. Escalabilidad: Es una buena base para construir desde pequeñas hasta grandes aplicaciones.
*/

/*
PUNTO 3:
Localhost se refiere a la dirección IP 127.0.0.1, que apunta a la propia máquina.
Es una dirección de red que se usa para acceder a servicios que se ejecutan localmente.

Ventajas del uso de localhost en desarrollo web:
1. Entorno seguro para pruebas: Permite desarrollar y probar sin necesidad de una conexión a internet ni publicar el sitio.
2. Velocidad: Al trabajar localmente, las respuestas son instantáneas.
3. Depuración: Facilita encontrar errores antes de desplegar en producción.
4. Privacidad: El código y datos no salen de nuestro equipo mientras se está desarrollando.
*/

// PUNTO 4:
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/inicio', (req, res) => {
  res.send('Página principal.');
});

// Ruta de error
app.get('/error', (req, res) => {
  res.send('Error');
});

// Servidor escuchando en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});