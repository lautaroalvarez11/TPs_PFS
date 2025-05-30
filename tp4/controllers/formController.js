const enviarDatos = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Renderiza la vista respuesta.hbs pasando los datos del formulario
  res.render('respuesta', { nombre, email, mensaje });
};

module.exports = { enviarDatos };
