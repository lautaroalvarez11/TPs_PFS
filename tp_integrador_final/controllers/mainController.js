const mostrarDatos = (req, res) => {
  const { nombre, edad, sexo, correo } = req.body;

  res.render('mostrarDatos', {
    nombre,
    edad,
    sexo,
    correo
  });
};

const saludoRespuesta = (req, res) => {
  const { nombre } = req.body;

  res.render('saludoRespuesta', { nombre });
};

const horaActual = (req, res) => {
  const ahora = new Date();

  const hora = ahora.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  res.json({ horaServidor: hora });
};

module.exports = {
  mostrarDatos,
  saludoRespuesta,
  horaActual
};