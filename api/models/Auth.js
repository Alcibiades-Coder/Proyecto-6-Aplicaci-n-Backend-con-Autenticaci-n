//// Importaciones
const mongoose = require("mongoose"); // Importa mongoose para interactuar con MongoDB

//// Objeto Modelo de DB para Autenticación

// Define un modelo de Mongoose llamado 'Auth' para la colección de usuarios (autenticación)
const Auths = mongoose.model("Auth", {
  email: { type: String, required: true }, // Campo para el correo electrónico, que es obligatorio
  password: { type: String, required: true }, // Campo para la contraseña, que es obligatorio
  salt: { type: String, required: true }, // Campo para la sal (salt) usada en el hash de la contraseña, también obligatorio
});

module.exports = Auths; // Exporta el modelo 'Auth' para que se pueda usar en otros archivos
