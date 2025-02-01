//// Importaciones

const mongoose = require("mongoose"); // Importa mongoose para interactuar con MongoDB

//// Objeto Modelo de DB para Reservas

// Define un modelo de Mongoose llamado 'Prod' para la colección de reservas
const Prods = mongoose.model("Prod", {
  idsearch: { type: String, required: false, minLength: 3 }, // ID de búsqueda, no es obligatorio, pero si se proporciona debe tener al menos 3 caracteres
  name: { type: String, required: true, minLength: 3 }, // Nombre de la reserva, obligatorio, debe tener al menos 3 caracteres
  date: { type: Date, required: true, minLength: 3 }, // Fecha de la reserva, obligatorio
  city: { type: String, required: true, minLength: 3 }, // Ciudad de la reserva, obligatorio, debe tener al menos 3 caracteres
  hotel: { type: String, required: true, minLength: 1 }, // Nombre del hotel, obligatorio, con al menos 1 carácter
  numpassengers: { type: Number, required: true, minLength: 1 }, // Número de pasajeros adultos, obligatorio, al menos 1
  numkids: { type: Number, required: true, minLength: 1 }, // Número de niños, obligatorio, al menos 1
  roomtype: { type: String, required: true, minLength: 3 }, // Tipo de habitación, obligatorio, debe tener al menos 3 caracteres
  checkin: { type: Date, required: true, minLength: 3 }, // Fecha de entrada, obligatorio
  checkout: { type: Date, required: true, minLength: 3 }, // Fecha de salida, obligatorio
  state: { type: String, required: true, minLength: 3 }, // Estado de la reserva, obligatorio, debe tener al menos 3 caracteres
});

module.exports = Prods; // Exporta el modelo 'Prod' para su uso en otros archivos
