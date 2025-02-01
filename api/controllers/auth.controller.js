//// Importaciones de dependencias
const express = require("express"); // Importa Express, el framework para manejar rutas HTTP
const mongoose = require("mongoose"); // Importa Mongoose para la interacción con MongoDB
const bcrypt = require("bcrypt"); // Importa bcrypt para el hash de contraseñas
const jwt = require("jsonwebtoken"); // Importa jsonwebtoken para crear y verificar tokens JWT
const { expressjwt: expressJwt } = require("express-jwt"); // Importa express-jwt para validar JWT en las rutas
require("dotenv").config(); // Carga las variables de entorno desde un archivo .env
const Auths = require("../models/Auth"); // Importa el modelo de usuario para interactuar con la base de datos

//// Palabra secreta para encriptación (cargada desde el archivo .env)
const secret = process.env.SECRET; // Se obtiene la clave secreta para la firma del JWT

//// Encriptación con llave y algoritmo (middleware para validar JWT)
const validateJwt = expressJwt({ secret, algorithms: ["HS256"] }); // Middleware para validar JWT usando la clave secreta y el algoritmo HS256

//// Función para generar el token firmado
const signToken = (_id) => jwt.sign({ _id }, secret); // Función para firmar y generar un token con el id del usuario

//// Función que busca y asigna un usuario para Autenticación
const findAndAssingUser = async (req, res, next) => {
  try {
    // Busca el usuario en la base de datos usando el _id proporcionado en el token JWT
    const user = await Auths.findById(req.auth._id);
    if (!user) {
      return res.status(401).send("Usuario no autenticado."); // Si no se encuentra el usuario, devuelve un error 401
    }
    req.user = user; // Asigna el usuario autenticado al objeto `req` para usarlo en siguientes middlewares
    next(); // Continúa con el siguiente middleware o ruta
  } catch (e) {
    next(e); // En caso de error, pasa el error al siguiente middleware de manejo de errores
  }
};

//// Ruteo para Express, con validación de autenticación
const isAuthenticated = express.Router().use(validateJwt, findAndAssingUser); // Define una ruta protegida que requiere validación de JWT y asignación de usuario

//// Objeto Controlador para Manejo de Autenticación
const Authenticate = {
  //// Controladores Específicos

  //// Controlador de Login
  login: async (req, res) => {
    const { body } = req;
    try {
      // Busca el usuario por el correo electrónico
      const user = await Auths.findOne({ email: body.email });
      if (!user) {
        res.status(401).send("Usuario y/o contraseña invalida"); // Si no existe el usuario, retorna un error
      } else {
        // Compara la contraseña proporcionada con la almacenada en la base de datos
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (isMatch) {
          // Si la contraseña es correcta, firma y devuelve un token
          const signed = signToken(user._id);
          res.status(200).send(signed); // Devuelve el token firmado
        } else {
          res.status(401).send("Usuario y/o contraseña invalida"); // Si no coincide la contraseña, retorna error
        }
      }
    } catch (e) {
      res.send(e.message); // En caso de error, muestra el mensaje de error
    }
  },

  //// Controlador de Register (Registro de Usuario)
  register: async (req, res) => {
    const { body } = req;
    try {
      // Verifica si ya existe un usuario con el mismo correo
      const isAuth = await Auths.findOne({ email: body.email });
      if (isAuth) {
        res.send("Usuario ya existe!"); // Si ya existe el usuario, retorna un mensaje de error
      } else {
        // Genera un salt y hashea la contraseña
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(body.password, salt);
        // Crea un nuevo usuario en la base de datos
        const user = await Auths.create({
          email: body.email,
          password: hashed,
          salt,
        });
        // Firma y devuelve un token
        const signed = signToken(user._id);
        res.send(signed); // Devuelve el token firmado
      }
    } catch (err) {
      res.status(500).send(err.message); // En caso de error, retorna el mensaje de error
    }
  },

  //// Controlador de actualización de contraseña
  updatePassword: async (req, res) => {
    const { username, oldPassword, newPassword } = req.body;

    // Verifica que todos los campos estén presentes
    if (!username || !oldPassword || !newPassword) {
      return res.status(400).send("Todos los campos son obligatorios."); // Error si falta algún campo
    }

    try {
      // Obtiene el usuario autenticado desde el middleware
      const authenticatedUser = req.user;
      if (!authenticatedUser || authenticatedUser.email !== username) {
        return res
          .status(403)
          .send(
            "No tienes permiso para actualizar la contraseña de este usuario."
          );
      }

      // Busca el usuario en la base de datos
      const user = await Auths.findOne({ email: username });
      if (!user) {
        return res.status(404).send("Usuario no encontrado."); // Error si el usuario no existe
      }

      // Compara la contraseña actual con la almacenada
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(401).send("La contraseña actual es incorrecta.");
      }

      // Genera un nuevo hash para la nueva contraseña
      const salt = await bcrypt.genSalt();
      const hashedNewPassword = await bcrypt.hash(newPassword, salt);

      // Actualiza la contraseña en la base de datos
      user.password = hashedNewPassword;
      user.salt = salt;
      await user.save();

      res.status(200).send("Contraseña actualizada correctamente."); // Respuesta exitosa
    } catch (err) {
      res.status(500).send(err.message); // En caso de error, muestra el mensaje de error
    }
  },
};

module.exports = { Authenticate, isAuthenticated }; // Exporta el objeto Authenticate y el middleware isAuthenticated
