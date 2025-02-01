//// Importaciones
const Prods = require("../models/Prod"); // Importa el modelo de productos/reservas para interactuar con la base de datos

//// Objeto Controlador para Manejo de Reservas
const Prod = {
  //// Controladores Reutilizables

  // Controlador para Obtener un Producto por ID
  get: async (req, res) => {
    const { id } = req.params; // Extrae el ID del producto desde los parámetros de la URL
    const prod = await Prods.findOne({ _id: id }); // Busca el producto en la base de datos usando el ID
    res.status(200).send(prod); // Devuelve el producto encontrado con un código de estado 200
  },

  // Controlador para Listar Todos los Productos
  list: async (req, res) => {
    const prods = await Prods.find(); // Obtiene todos los productos de la base de datos
    res.status(200).send(prods); // Devuelve la lista de productos con un código de estado 200
  },

  // Controlador para Crear un Nuevo Producto
  create: async (req, res) => {
    const prod = new Prods(req.body); // Crea un nuevo producto con los datos proporcionados en el cuerpo de la solicitud
    const savedProd = await prod.save(); // Guarda el producto en la base de datos
    res.status(201).send(savedProd._id); // Devuelve el ID del producto recién creado con un código de estado 201
  },

  // Controlador para Actualizar un Producto Existente
  update: async (req, res) => {
    const { id } = req.params; // Extrae el ID del producto desde los parámetros de la URL
    const prod = await Prods.findOne({ _id: id }); // Busca el producto en la base de datos usando el ID
    Object.assign(prod, req.body); // Asigna los nuevos datos del cuerpo de la solicitud al producto
    await prod.save(); // Guarda los cambios en el producto
    res.sendStatus(204); // Responde con un código de estado 204 (sin contenido) indicando éxito
  },

  // Controlador para Eliminar un Producto por ID
  destroy: async (req, res) => {
    const { id } = req.params; // Extrae el ID del producto desde los parámetros de la URL
    const prod = await Prods.findOne({ _id: id }); // Busca el producto en la base de datos usando el ID
    if (prod) {
      await prod.deleteOne({ _id: id }); // Elimina el producto si es encontrado
    }
    res.sendStatus(204); // Responde con un código de estado 204 (sin contenido) indicando éxito
  },

  //// Controladores Específicos

  // Controlador para Buscar Productos por Nombre de Hotel
  searchByHotel: async (req, res) => {
    const hotel = req.query.hotel; // Obtiene el nombre del hotel desde la consulta (query param)

    if (!hotel) {
      return res
        .status(400)
        .json({ message: "El nombre del hotel es obligatorio" }); // Responde con un error si no se proporciona el nombre del hotel
    }

    try {
      const reservations = await Prods.find({ hotel: hotel }); // Busca productos asociados al hotel especificado
      if (reservations.length === 0) {
        return res.status(404).json({
          message: "No se encontraron reservas para el hotel especificado.", // Si no se encuentran reservas, retorna un error 404
        });
      }
      return res.status(200).json(reservations); // Devuelve las reservas encontradas con un código de estado 200
    } catch (error) {
      console.error(error); // Muestra el error en la consola
      return res
        .status(500)
        .json({ message: "Hubo un error al obtener las reservas" }); // Responde con un error 500 en caso de problemas internos
    }
  },

  // Controlador para Buscar Productos por Tipo de Habitación
  searchRoomType: async (req, res) => {
    const roomtype = req.query.roomtype; // Obtiene el tipo de habitación desde la consulta

    if (!roomtype) {
      return res
        .status(400)
        .json({ message: "El tipo de habitación es obligatorio" }); // Responde con un error si no se proporciona el tipo de habitación
    }

    try {
      const rooms = await Prods.find({ roomtype: roomtype }); // Busca productos con el tipo de habitación especificado

      if (rooms.length === 0) {
        return res.status(404).json({
          message: "No se encontraron habitaciones del tipo especificado.", // Si no se encuentran habitaciones, responde con un error 404
        });
      }

      return res.status(200).json(rooms); // Devuelve las habitaciones encontradas con un código de estado 200
    } catch (error) {
      console.error(error); // Muestra el error en la consola
      return res
        .status(500)
        .json({ message: "Hubo un error al obtener las habitaciones" }); // Responde con un error 500 si hay problemas internos
    }
  },

  // Controlador para Buscar Productos por Rango de Fechas
  searchByDates: async (req, res) => {
    const { start, end } = req.query; // Obtiene las fechas de inicio y fin desde la consulta

    if (!start || !end) {
      return res
        .status(400)
        .json({ message: "Las fechas de inicio y fin son requeridas." }); // Responde con un error si falta alguna de las fechas
    }

    try {
      const startDate = new Date(start); // Convierte la fecha de inicio en un objeto Date
      const endDate = new Date(end); // Convierte la fecha de fin en un objeto Date

      const bookings = await Prods.find({
        checkin: { $lte: endDate }, // Filtra las reservas cuya fecha de check-in sea antes o igual a la fecha de fin
        checkout: { $gte: startDate }, // Filtra las reservas cuya fecha de check-out sea después o igual a la fecha de inicio
      });

      res.json(bookings); // Devuelve las reservas encontradas
    } catch (error) {
      console.error(error); // Muestra el error en la consola
      res.status(500).json({ message: "Error interno del servidor." }); // Responde con un error 500 si hay problemas internos
    }
  },

  // Controlador para Buscar Productos por Número de Pasajeros Adultos
  searchByNumPassengers: async (req, res) => {
    const { adults } = req.query; // Obtiene el número de adultos desde la consulta

    if (!adults) {
      return res
        .status(400)
        .json({ message: "El número de adultos es requerido." }); // Responde con un error si no se proporciona el número de adultos
    }

    try {
      const numAdults = parseInt(adults); // Convierte el valor de adultos en un número entero

      if (isNaN(numAdults)) {
        return res.status(400).json({
          message: "El número de adultos debe ser un valor numérico.", // Responde con un error si el valor no es un número
        });
      }

      const bookings = await Prods.find({ numpassengers: numAdults }); // Busca reservas que coincidan con el número de adultos

      res.json(bookings); // Devuelve las reservas encontradas
    } catch (error) {
      console.error(error); // Muestra el error en la consola
      res.status(500).json({ message: "Error interno del servidor." }); // Responde con un error 500 si hay problemas internos
    }
  },

  // Controlador para Buscar Productos por Estado de la Reserva
  searchByState: async (req, res) => {
    const state = req.query.state; // Obtiene el estado de la reserva desde la consulta

    if (!state) {
      return res
        .status(400)
        .json({ message: "El nombre del estado es obligatorio" }); // Responde con un error si no se proporciona el estado
    }

    try {
      const states = await Prods.find({ state: state }); // Busca productos con el estado especificado

      if (states.length === 0) {
        return res
          .status(404)
          .json({ message: "No se encontraron estados especificados." }); // Si no se encuentran productos con el estado, responde con un error 404
      }

      return res.status(200).json(states); // Devuelve los productos encontrados con un código de estado 200
    } catch (error) {
      console.error(error); // Muestra el error en la consola
      return res
        .status(500)
        .json({ message: "Hubo un error al obtener las reservas" }); // Responde con un error 500 si hay problemas internos
    }
  },
};

module.exports = Prod; // Exporta el objeto controlador Prod
