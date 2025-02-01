// Importaciones

const express = require("express"); // Importa la librería Express para crear el servidor y manejar rutas
const mongoose = require("mongoose"); // Importa Mongoose para interactuar con la base de datos MongoDB
require("dotenv").config(); // Carga las variables de entorno desde un archivo .env
const prod = require("./controllers/prod.controller"); // Importa el controlador de productos (reservas)
const {
  Authenticate,
  isAuthenticated,
} = require("./controllers/auth.controller"); // Importa los controladores de autenticación

const swaggerUi = require("swagger-ui-express"); // Importa swagger-ui-express para visualizar la documentación de Swagger
const swaggerDocument = require("./swagger/openapi.json"); // Importa el archivo de configuración de Swagger
// Constantes de Aplicación

const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto en el que la aplicación escuchará las solicitudes

// Uso de Express JSON

app.use(express.json()); // Middleware para que Express pueda entender el formato JSON en las solicitudes

// Uso de Swagger para Documentación
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Middleware para visualizar la documentación de Swagger en la ruta /api-docs

// Conexión con MongoDB mediante Mongoose

mongoose
  .connect(process.env.MONGOUSERANDDB) // Conecta a MongoDB usando la URL definida en el archivo .env
  .then(() => console.log("Connected to MongoDB Atlas")) // Si la conexión es exitosa, muestra un mensaje
  .catch((err) => console.error(err)); // Si ocurre un error, lo muestra en la consola

// Endpoints de Login y Registro

app.post("/user/login", Authenticate.login); // Ruta para realizar el login de usuario
app.post("/user/register", Authenticate.register); // Ruta para registrar un nuevo usuario
app.put("/user/update", isAuthenticated, Authenticate.updatePassword); // Ruta para actualizar la contraseña de un usuario autenticado

// Endpoints GET, POST, PUT, PATCH, DELETE para productos (reservas)

app.get("/product", isAuthenticated, prod.list); // Ruta para listar todos los productos (requiere autenticación)
app.get("/product/hotel", isAuthenticated, prod.searchByHotel); // Ruta para buscar productos por hotel (requiere autenticación)
app.get("/product/roomtype", isAuthenticated, prod.searchRoomType); // Ruta para buscar productos por tipo de habitación (requiere autenticación)
app.get("/product/dates", isAuthenticated, prod.searchByDates); // Ruta para buscar productos por rango de fechas (requiere autenticación)
app.get("/product/adults", isAuthenticated, prod.searchByNumPassengers); // Ruta para buscar productos por número de pasajeros adultos (requiere autenticación)
app.get("/product/state", isAuthenticated, prod.searchByState); // Ruta para buscar productos por estado de la reserva (requiere autenticación)
app.post("/product", isAuthenticated, prod.create); // Ruta para crear un nuevo producto (requiere autenticación)
app.get("/product/:id", isAuthenticated, prod.get); // Ruta para obtener un producto específico por ID (requiere autenticación)
app.put("/product/:id", isAuthenticated, prod.update); // Ruta para actualizar un producto específico por ID (requiere autenticación)
app.patch("/product/:id", isAuthenticated, prod.update); // Ruta para hacer una actualización parcial de un producto (requiere autenticación)
app.delete("/product/:id", isAuthenticated, prod.destroy); // Ruta para eliminar un producto por ID (requiere autenticación)

// Middleware para ejecutar APP de forma estática por Express

app.use(express.static("app")); // Sirve archivos estáticos (como HTML, CSS, JS) desde la carpeta 'app'

// Endpoint para Ejecutar la Página Base index.html

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`); // Enviar el archivo index.html como respuesta cuando se accede a la ruta raíz
});

// Endpoint para Ejecutar error si es que no encuentra la Página

app.get("*", (req, res) => {
  res.status(404).send("Esta Página No Existe!"); // Si se accede a una ruta que no está definida, responde con un error 404
});

// Endpoint para asignar el Listen Port para la app

app.listen(port, () => {
  console.log("Arrancando la App"); // Inicia el servidor y escucha en el puerto definido
});
