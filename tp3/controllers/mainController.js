const path = require('path');

exports.appInfo = (req, res) => {
  res.send('Esta es una aplicación hecha con Express y Node.js por Lautaro Ezequiel Álvarez');
};

exports.contacto = (req, res) => {
  res.send('Podés contactarte al mail: lealvarez485@comunidad.unnoba.edu.ar');
};

exports.mostrarPagina = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pagina.html'));
};