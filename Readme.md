# PROYECTO 4: Reservas Hoteleras

## **ÍNDICE**

- [A. Intro](#A-intro)
- [B. Demo](#B-demo)
- [C. ¿Qué construirás?](#C-qu%C3%A9-construir%C3%A1s)
- [D. Objetivos de Aprendizaje](#D-objetivos-de-aprendizaje)
- [F. Requisitos](#F-requisitos-y-entregables)
- [G. Criterios de evaluación](#G-criterios-de-evaluaci%C3%B3n)
- [H. Entregas](#H-entregas)

---

## A. Intro

En este proyecto, el objetivo fue construir una aplicación backend que administra la autenticación y autorización de los usuarios. Este es un componente fundamental en la mayoría de las aplicaciones web, en este proyecto se aprendieron sobre las mejores prácticas y las herramientas disponibles para manejar estas tareas, como los JWT (JSON Web Tokens).

---

## B. Demo

Visita la aplicación aquí: [LINK](https://proyecto-6-aplicaci-n-backend-con.onrender.com/)

En la app, se muestra la gestión de reservas hoteleras. Donde se comprenden todos los requisitos solicitados.

La documentación de la API en esta app utiliza Swagger y OpenAPI.

Visita la documentación aquí: [LINK](https://proyecto-6-aplicaci-n-backend-con.onrender.com/api-docs)


---

## C. ¿Qué se construyó?

Este proyecto, se divide en dos actividades:

1. La construcción de una aplicación de servicios para la gestión de reservas en hoteles que involucra las 4 operaciones `CRUD` y otras 6 adicionales relacionadas con filtros, utilizando Node.js y Express.

2. Opcionalmente, se realizó la documentación de la API, usando Swagger, con la estandarización OPENAPI.

A continuación, se presentan las características solicitadas del proyecto:

- Se utilizó Node.js y Express para el desarrollo del servidor.
- Se cuenta con un archivo `.env` para las variables de entorno.
- Se cuenta con un archivo `.gitignore` que incluye las carpetas y archivos que se ocultan para el repositorio.
- Uso de una arquitectura de carpetas como se muestra a continuación.

```
Proyecto\ 4\ Reservas\ Hoteleras
│  └─  api
│    ├─ .env
│    ├─ .gitignore
│    ├─ apiProds.js
│    ├─ app
│    │  └─ main.js
│    ├─ controllers
│    │  ├─ auth.controller.js
│    │  └─ prod.controller.js
│    ├─ index.html
│    ├─ models
│    │  ├─ Auth.js
│    │  └─ Prod.js
│    ├─ package-lock.json
│    └─ package.json
└─ README.md (ESTE ARCHIVO)
```

- Se implementan los siguientes 10 endpoints.

### Endpoints para Usuario:

| Descripción del Endpoint           | Método | Endpoint           | Ejemplo. Caso de uso.                                                                                                            |
| ---------------------------------- | ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Registrar un usuario               | POST   | /user/register | Ruta para realizar el login de usuario.                 |
| Iniciar sesión de usuario          | POST   | /user/login    | Ruta para registrar un nuevo usuario. |
| Actualizar información del usuario | PUT    | /user/update   | Ruta para actualizar la contraseña de un usuario autenticado.                       |

### Endpoints para Producto:

| Descripción del Endpoint    | Método | Endpoint                 | Ejemplo. Caso de uso.                                                                                                                    |
| --------------------------- | ------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Crear un producto           | POST   | /product      | Ruta para crear un nuevo producto (requiere autenticación). |
| Leer todos los productos    | GET    | /product     | Ruta para listar todos los productos (requiere autenticación).                       |
| Leer un producto específico por ID | GET    | /product/:id | Ruta para obtener un producto específico por ID (requiere autenticación).                     |
| Leer un producto específico por Hotel | GET    | /product/hotel | Ruta para buscar productos por hotel (requiere autenticación).                     |
| Leer un producto específico por habitación| GET    | /product/roomtype | Ruta para buscar productos por tipo de habitación (requiere autenticación).                     |
| Leer un producto específico por Rango de Fechas | GET    | /product/dates | Ruta para buscar productos por rango de fechas (requiere autenticación)).                     |
| Leer un producto específico por Dato de Pasajero| GET    | /product/adults | Ruta para buscar productos por número de pasajeros adultos (requiere autenticación).                     |
| Leer un producto específico por Dato de Estado| GET    | /product/state | Ruta para buscar productos por estado de la reserva (requiere autenticación).                    |
| Actualizar un producto      | PUT    | /product/update/:id  | Como vendedor, quiero actualizar los detalles de un producto específico, como su nombre, descripción y precio.                           |
| Eliminar un producto        | DELETE | /product/delete/:id  | Como vendedor, quiero eliminar un producto específico de mi catálogo cuando ya no esté disponible para la venta.                         |

- Los Tokens de JWT son almacenados en LocalStorage por lo que los datos de sesión quedan almacenados de forma local.

---

## D. Objetivos de aprendizaje logrados

Los objetivos principales de este proyecto son:

- Se aplicarón conceptos de autenticación y autorización en una aplicación backend.
- Se utilizó `MongoDB` y `Mongoose`.
- Se aplicaron las operaciones `CRUD` en la creación de servicios.
- Se utilizó `OPENAPI` y `Swagger` para documentar los servicios.
- Se desarrolló una aplicación completa utilizando `Node.js`, y se complementó con herramientas como `express.js` y `dotenv`.
- Se utilizó `MongoDB Atlas` para el despliegue de la base de datos y netifly.com para la entrega del proyecto.

Objetivos Aprendidos de forma Autodidacta

- Se Manejaron los datos en una Base de Datos MongoDB Atlas.
- Se Integró la API al DOM mediante una plantilla simple y formularios HTML.
- Se Integró el Registro y Login mediante el uso de JSON Web Tokens y encriptación.

---

## F. Requisitos y entregables

Usa esta lista para saber los requisitos mínimos del proyecto:

### GENERAL

- [OK] Trabajó realizado de manera individual por Alcibiades Oyarzún Neilson

### ARQUITECTURA DE CARPETAS

- [OK] Se creó una arquitectura de carpetas y archivos, clara

```
Proyecto\ 4\ Reservas\ Hoteleras
│  └─  api
│    ├─ .env
│    ├─ .gitignore
│    ├─ api.js
│    ├─ app
│    │  └─ main.js
│    ├─ controllers
│    │  ├─ auth.controller.js
│    │  └─ user.controller.js
│    ├─ index.html
│    ├─ models
│    │  ├─ Auth.js
│    │  └─ User.js
│    ├─ package-lock.json
│    └─ package.json
└─ README.md (ESTE ARCHIVO)
```

### APLICACIÓN DE SERVICIOS CRUD

- [OK] Se implementó autenticación y autorización en la aplicación utilizando JSON Web Token JWT.
- [OK] Se crearón dos modelos, uno para el Usuario (AUTH) y otro para el Producto (PROD).
- [OK] Se implementarón operaciones CRUD para los modelos de Usuario y de Productos.
- [OK] Se utilizaró MongoDB Atlas y Mongoose para gestionar la base de datos.

### CONTROL DE VERSIONES

- [OK] Se Creó un repositorio en GitHub y se subió el proyecto al mismo.

### ENTREGA A TIEMPO

- [OK] Se entrega a tiempo el proyecto.

### DOCUMENTACIÓN DE LA API (OPCIONAL)

- [OK] Se documentó todos los `endpoints` utilizando `Swagger` y `OpenAPI`

### DESPLIEGUE (OPCIONAL)

- [OK] Se despliega en una URL de producción el proyecto, a través de [render.com](https://render.com)

---

### APLICACIÓN DE SERVICIOS CRUD

#### ENDPOINT PARA USUARIO

- ##### 1.- REGISTRAR UN USUARIO

* [OK] Permitir registrar en la plataforma proporcionando correo electrónico y una contraseña.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar los datos de resgistro del usuario.

```
//// Template para Registro
const loadRegisterTemplate = () => {
  // Define la estructura HTML para la página de registro
  const template = `
    <h1>1.- EndPoint de Usuario - Registrar un usuario</h1>
    <h2>Registro</h2>
    <form id="register-form">
      <div>
        <label>Correo</label>
        <input name="email" />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Enviar</button>
    </form>
    <a href="#" id="login">Iniciar Sesión</a>
    <div id="error"></div>
  `;

  // Inserta el template en el cuerpo del documento
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = template;
};

```

Para la recepción de los datos del formulario se crea dentro del archivo `/app/main.js` el siguiente listener, este a su vez previene el comportamiento por defecto del botón `Enviar` y realiza un Fetch al EndPoint /user con el metodo POST para luego limpiar el formulario y ejecutar la función de login de usuario.

```
//// Listener del Formulario de Register
const addRegisterListener = () => {
  const registerForm = document.getElementById("register-form");
  registerForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.text();
    if (response.status >= 300) {
      document.getElementById("error").innerHTML = responseData;
    } else {
      alert(responseData); // Muestra el mensaje de éxito
      loginPage(); // Redirige a la página de login
    }
  };
};
```

El EndPoint `/user` con el metodo POST es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API utiliza el objeto controlador `Authenticate`. Tambien el Endpoint hace referencia a la función controladora `Authenticate.register`.

```
app.post("/user/register", Authenticate.register); // Ruta para registrar un nuevo usuario
```

La logica de la función controladora `Authenticate.register` del EndPoint se encuentra en su archivo controlador `/controllers/auth.controller.js` y es la siguiente:

```
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
```

- ##### 2.- REGISTRAR UN USUARIO

* [OK] Permitir iniciar sesión en la plataforma utilizando correo electrónico y contraseña para acceder a los productos.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar los datos de login del usuario.

```
//// Template para Login
const loadLoginTemplate = () => {
  // Define la estructura HTML para la página de inicio de sesión
  const template = `
    <h1>2.- EndPoint de Usuario - Iniciar sesión de usuario</h1>
    <h2>Login</h2>
    <form id="login-form">
      <div>
        <label>Correo</label>
        <input name="email" />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Enviar</button>
    </form>
    <a href="#" id="register">Registrarse</a>
    <div id="error"></div>
  `;

  // Inserta el template en el cuerpo del documento
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = template;
};

```

Para la recepción de los datos del formulario se crea dentro del archivo `/app/main.js` el siguiente listener, este a su vez previene el comportamiento por defecto del botón `Enviar` y realiza un Fetch al EndPoint /user con el metodo POST para luego limpiar el formulario y ejecutar la función de productos.

```
//// Listener del Formulario de Login
const addLoginListener = () => {
  const loginForm = document.getElementById("login-form");
  loginForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData.entries());

    // Realiza una solicitud POST para iniciar sesión
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.text();
    if (response.status >= 300) {
      document.getElementById("error").innerHTML = responseData; // Muestra errores
    } else {
      localStorage.setItem("jwt", `Bearer ${responseData}`); // Guarda el token en localStorage
      bookingPage(); // Redirige a la página de reservas
    }
  };
};
```

El EndPoint `/user` con el metodo POST es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API utiliza el objeto controlador `Authenticate`. Tambien el Endpoint hace referencia a la función controladora `Authenticate.login`.

```
app.post("/user/login", Authenticate.login); // Ruta para realizar el login de usuario
```

La logica de la función controladora `Authenticate.login` del EndPoint se encuentra en su archivo controlador `/controllers/auth.controller.js` y es la siguiente:

```
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
```

- ##### 3.- REGISTRAR UN USUARIO

* [OK] Permitir actualizar información de perfil (contraseña) en base a correo electrónico y contraseña antigua.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar los datos de login del usuario.

```
<h1>Cambiar Contraseña</h1>
        <form id="change-password-form">
            <div>
                <label>Usuario o Correo</label>
                <input type="text" name="username" placeholder="Usuario o correo" required />
            </div>
            <div>
                <label>Contraseña Actual</label>
                <input type="password" name="oldPassword" placeholder="Contraseña actual" required />
            </div>
            <div>
                <label>Nueva Contraseña</label>
                <input type="password" name="newPassword" placeholder="Contraseña" required />
            </div>
            <button type="submit">Actualizar Contraseña</button>
        </form>

```

Para la recepción de los datos del formulario se crea dentro del archivo `/app/main.js` el siguiente listener, este a su vez previene el comportamiento por defecto del botón `Enviar` y realiza un Fetch al EndPoint /user con el metodo PUT para luego limpiar el formulario y ejecutar la función de productos.

```
//// Función para Cambio de Password
const loadChangePasswordTemplate = () => {
  // Selecciona el formulario de cambio de contraseña
  const form = document.getElementById("change-password-form");

  // Asigna un evento al formulario para manejar el cambio de contraseña
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get("username");
    const oldPassword = formData.get("oldPassword");
    const newPassword = formData.get("newPassword");
    const token = localStorage.getItem("jwt");

    // Verifica que todos los campos estén llenos
    if (!username || !oldPassword || !newPassword) {
      document.getElementById("error").innerText =
        "Todos los campos son obligatorios.";
      return;
    }

    // Verifica si el usuario está autenticado
    if (!token) {
      document.getElementById("error").innerText =
        "Autenticación requerida. Por favor, inicia sesión.";
      return;
    }

    try {
      // Realiza una solicitud PUT para actualizar la contraseña
      const response = await fetch("/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ username, oldPassword, newPassword }),
      });

      if (response.ok) {
        alert("Contraseña actualizada correctamente.");
        window.location.href = "/"; // Redirige al inicio
      } else {
        const error = await response.text();
        document.getElementById("error").innerText = error;
      }
    } catch (err) {
      document.getElementById("error").innerText =
        "Error al actualizar la contraseña.";
    }
  });
};

```

El EndPoint `/user/update` con el metodo POST es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `Authenticate.updatePassword`.

```
app.put("/user/update", isAuthenticated, Authenticate.updatePassword); // Ruta para actualizar la contraseña de un usuario autenticado
```

La logica de la función controladora `Authenticate.updatePassword` del EndPoint se encuentra en su archivo controlador `/controllers/auth.controller.js` y es la siguiente:

```
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
```

#### ENDPOINT PARA PRODUCTO

- ##### 1.- CREAR UN PRODUCTO

* [OK] Permitir la creación de prodcutos, en esta app, reservas con los detalles necesarios (por ejemplo, hotel, tipo de habitación, número de huéspedes, fechas, etc.).

En el Archivo `/app/main.js` se crea el formulario para poder ingresar los datos de la reserva.

```
// Función que carga una plantilla HTML en el contenido del cuerpo del documento.
const loadInitialTemplate = () => {
  ...
      <h1>EndPoints de Productos</h1>
      <h1>1.- EndPoint de Productos - Crear un Producto</h1>
      <h2>Reservas</h2>
      <!-- Formulario para crear una nueva reserva -->
      <form id="user-form">
        <div>
          <label>Nombre</label>
          <input name="name" />
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input id="nacimiento" name="date" type="date" />
        </div>
        <div>
          <label>Ciudad</label>
          <input name="city" type="text" />
        </div>
        <div>
          <label>Hotel</label>
          <select name="hotel">
            <option value="Paraiso">Paraiso</option>
            <option value="Niagara">Niagara</option>
            <option value="Cozumel">Cozumel</option>
            <option value="En Sueño">En Sueño</option>
          </select>
        </div>
        <!-- Más campos de formulario para completar la reserva -->
        <button type="submit">Enviar</button>
      </form>
       ...
  // Inserta la plantilla generada en el cuerpo del documento.
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = template;
};
```

Para la recepción de los datos del formulario se crea dentro del archivo `/app/main.js` el siguiente listener, este a su vez previene el comportamiento por defecto del botón `Enviar` y realiza un Fetch al EndPoint /users con el metodo POST para luego limpiar el formulario y ejecutar la función para listar las reservas.

```
//// Listener para el Formulario de Creación de Pasajeros
const addFormListener = () => {
  // Función similar a `addUpdateFormListener`, utilizada para crear pasajeros
  const userForm = document.getElementById("user-form");
  userForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const data = Object.fromEntries(formData.entries());

    await fetch("/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
    });

    userForm.reset();
    getUsers(); // Actualiza la lista de pasajeros
  };
};
```

El EndPoint `/product` con el metodo POST es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.create`.

```
app.post("/product", isAuthenticated, prod.create); // Ruta para crear un nuevo producto (requiere autenticación)
```

La logica de la función controladora `user.create` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
// Controlador para Crear un Nuevo Producto
  create: async (req, res) => {
    const prod = new Prods(req.body); // Crea un nuevo producto con los datos proporcionados en el cuerpo de la solicitud
    const savedProd = await prod.save(); // Guarda el producto en la base de datos
    res.status(201).send(savedProd._id); // Devuelve el ID del producto recién creado con un código de estado 201
  },
```

y el schema utilizado para la logica se encuentra en el archivo de modelos `/models/Prod.js` y su estructura es:

```
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

```

- ##### 2.- LEER TODOS LOS PRODUCTOS

* [OK] Permitir la visualización de la lista de productos (reservas).

En el Archivo `/app/main.js` se crea un contenedor para poder listar los datos de la reservas.

```
<h1>2.- EndPoint de Productos- Leer todos los Productos</h1>
        <h1>5.- EndPoint de Productos- Borrar un Producto</h1>
              <h2>Listado de Reservas</h2>
                    <ul id="user-list"></ul>
```

Dento del Archivo `/app/main.js` tambien se encuentra la función `getUsers` que genera una plantilla para mostrar todos las reservas creadas de la siguiente forma:

```
//// Función de Controlador para Listar todas las Reservas de Pasajeros

const getUsers = async () => {
  // Realiza una solicitud a la API para obtener todas las reservas de pasajeros
  const response = await fetch("/product", {
    headers: {
      Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para autenticar la solicitud
    },
  });

  // Convierte la respuesta de la API en un arreglo de objetos JSON
  const prods = await response.json();

  // Función para generar dinámicamente el HTML de una reserva
  const template = (prod) => `
        <li>
           <div>
              <p>Reserva a Nombre de: ${prod.name}</p>
              <p>Id de la Reserva: ${prod._id}</p>
              <p>En el Hotel: ${prod.hotel}</p>
              <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
              <p>Tipo de Habitación: ${prod.roomtype}</p>
              <p>Fecha de Ingreso: ${prod.checkin}</p>
              <p>Fecha de Salida: ${prod.checkout}</p>
              <p>Estado Reserva: ${prod.state}</p>
           </div>
           <button data-id="${prod._id}">Eliminar</button>
        </li>
    `;

  // Selecciona el contenedor donde se mostrarán las reservas
  const userList = document.getElementById("user-list");

  // Genera el HTML para todas las reservas y las inserta en el contenedor
  userList.innerHTML = prods.map((prod) => template(prod)).join("");

  // Recorre las reservas obtenidas para configurar la funcionalidad del botón "Eliminar"
  prods.forEach((prod) => {
    // Selecciona el botón de eliminación correspondiente a cada reserva
    const userNode = document.querySelector(`[data-id="${prod._id}"]`);

    // Asigna un evento 'click' al botón de eliminación
    userNode.onclick = async (e) => {
      // Realiza una solicitud DELETE a la API para eliminar la reserva por su ID
      await fetch(`/product/${prod._id}`, {
        method: "DELETE", // Define el método HTTP como DELETE
        headers: {
          Authorization: localStorage.getItem("jwt"), // Incluye el token JWT
        },
      });

      // Elimina el elemento visual del DOM tras una eliminación exitosa
      userNode.parentNode.remove();

      // Muestra un mensaje al usuario confirmando la eliminación
      alert("Eliminado con Éxito!");
    };
  });
};
```

Además esta función realiza un Fetch al EndPoint `/product` con el metodo GET que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.list`.

```
app.get("/product", isAuthenticated, prod.list); // Ruta para listar todos los productos (requiere autenticación)
```

La logica de la función controladora `prod.list` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
// Controlador para Listar Todos los Productos
  list: async (req, res) => {
    const prods = await Prods.find(); // Obtiene todos los productos de la base de datos
    res.status(200).send(prods); // Devuelve la lista de productos con un código de estado 200
  },
```

- ##### 3.1- LEER PRODUCTO ESPECÍFICO POR ID

* [OK] Permitir la obtención de la información de un producto (reserva) específico.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el ID de una reserva y asi obtener los datos de esta.

```
 <h1>3.1.- EndPoint de Productos - Leer Producto Específico por ID</h1>
            <h2>Buscar Reserva por ID</h2>
                <form id="search-form">
                    <label>ID de la Reserva:</label>
                    <input type="text" id="search-id" placeholder="Ingrese el ID de la reserva" />
                    <button type="submit">Buscar</button>
                </form>

```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="search-results"></div>
```

Para realizar la busqueda se crea la función `searchUsers` que realiza un Fetch a `/product/:id` y despliega los resultados en una plantilla en el contendor creado para este fin.

```
//// Función de Controlador de Búsqueda para Listar las Reservas de Pasajeros por ID

const searchUsers = () => {
  // Selecciona el formulario de búsqueda por ID
  const searchForm = document.getElementById("search-form");

  // Asigna un evento 'submit' al formulario
  searchForm.onsubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página al enviarse

    // Obtiene el valor del campo de entrada de ID y elimina los espacios en blanco
    const searchId = document.getElementById("search-id").value.trim();

    // Verifica que se haya ingresado un ID válido
    if (!searchId) {
      alert("Por favor, ingrese un ID válido."); // Alerta al usuario si el campo está vacío
      return;
    }

    try {
      // Llamada a la API para obtener los datos de la reserva según el ID ingresado
      const response = await fetch(`/product/${searchId}`, {
        headers: {
          Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para autenticación
        },
      });

      // Si la respuesta no es exitosa, lanza un error
      if (!response.ok) {
        throw new Error(
          "No se encontró ninguna reserva con el ID especificado."
        );
      }

      // Convierte la respuesta de la API a un objeto JSON
      const prod = await response.json();

      // Selecciona el contenedor donde se mostrarán los resultados de la búsqueda
      const searchResults = document.getElementById("search-results");

      // Genera dinámicamente el HTML para mostrar los detalles de la reserva encontrada
      searchResults.innerHTML = `
                <div>
                    <h3>Resultado de la búsqueda</h3>
                    <p>Reserva a Nombre de: ${prod.name}</p>
                    <p>ID de la Reserva: ${prod._id}</p>
                    <p>En el Hotel: ${prod.hotel}</p>
                    <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
                    <p>Tipo de Habitación: ${prod.roomtype}</p>
                    <p>Fecha de Ingreso: ${prod.checkin}</p>
                    <p>Fecha de Salida: ${prod.checkout}</p>
                    <p>Estado Reserva: ${prod.state}</p>
                    <button data-id="${prod._id}">Eliminar</button>
                </div>
            `;

      //// Función de Controlador para Borrar Reserva de Pasajero por ID

      // Selecciona el botón "Eliminar" generado dinámicamente
      const deleteButton = searchResults.querySelector(
        `[data-id="${prod._id}"]`
      );

      // Asigna un evento 'click' al botón de eliminación
      deleteButton.onclick = async () => {
        // Realiza una solicitud DELETE a la API para eliminar la reserva
        await fetch(`/product/${prod._id}`, {
          method: "DELETE", // Define el método HTTP como DELETE
          headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
        });

        // Limpia el contenedor de resultados tras la eliminación exitosa
        searchResults.innerHTML = "";

        // Muestra un mensaje al usuario confirmando la eliminación
        alert("Eliminado con éxito!");
      };
    } catch (error) {
      // Maneja errores y muestra un mensaje apropiado al usuario
      document.getElementById(
        "search-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};

```

El Fetch hace referencia al EndPoint `/product/:id` con el metodo GET que es utilizado por Express en el archivo `/apiPros.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `product.get`.

```
app.get("/product/:id", isAuthenticated, prod.get); // Ruta para obtener un producto específico por ID (requiere autenticación)
```

La logica de la función controladora `product.get` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
// Controlador para Obtener un Producto por ID
  get: async (req, res) => {
    const { id } = req.params; // Extrae el ID del producto desde los parámetros de la URL
    const prod = await Prods.findOne({ _id: id }); // Busca el producto en la base de datos usando el ID
    res.status(200).send(prod); // Devuelve el producto encontrado con un código de estado 200
  },
```

- ##### 3.2- LEER PRODUCTO ESPECÍFICO POR DATO HOTEL

* [OK] Permitir la búsqueda de productos (reservas) por hotel.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el hotel de la reserva.

```
<h1>3.2.- EndPoint de Productos - Leer Producto Específico por Dato Hotel</h1>
          <h2>Buscar Reserva por Hotel</h2>
              <form id="search-hotel">
                  <label>Nombre del Hotel:</label>
                      <select id="hotel-name">
                          <option value="Paraiso">Paraiso</option>
                          <option value="Niagara">Niagara</option>
                          <option value="Cozumel">Cozumel</option>
                          <option value="En Sueño">En Sueño</option>
                      </select>
              <button type="submit">Buscar</button>
              </form>
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="hotel-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByHotel` que realiza un Fetch a `/product/hotel?hotel="HOTEL SELECCIONADO"` y despliega los resultados en una plantilla en el contendor creado para este fin.

```
//// Función de Controlador para Listar las Reservas de Pasajeros por nombre de Hotel

const searchUsersByHotel = () => {
  // Obtiene el formulario para buscar reservas por nombre de hotel
  const searchHotelForm = document.getElementById("search-hotel");

  // Asigna un evento 'submit' al formulario
  searchHotelForm.onsubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtiene el nombre del hotel seleccionado por el usuario
    const hotelName = document.getElementById("hotel-name");
    const hotelSelected = hotelName.value; // Guarda el valor ingresado/seleccionado

    try {
      // Realiza una solicitud a la API para obtener las reservas del hotel seleccionado
      const response = await fetch(
        `/product/hotel?hotel=${encodeURIComponent(hotelSelected)}`,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para autenticación
          },
        }
      );

      // Verifica si la respuesta es exitosa, de lo contrario lanza un error
      if (!response.ok) {
        throw new Error(
          "No se encontraron reservas para el hotel especificado."
        );
      }

      // Convierte la respuesta a formato JSON para acceder a los datos
      const prods = await response.json();

      // Selecciona el contenedor donde se mostrarán los resultados de la búsqueda
      const hotelResults = document.getElementById("hotel-results");

      if (prods.length > 0) {
        // Genera dinámicamente el HTML para mostrar las reservas encontradas
        hotelResults.innerHTML = prods
          .map(
            (prod) => `
                    <div>
                        <h3>Reserva a Nombre de: ${prod.name}</h3>
                        <p>ID de la Reserva: ${prod._id}</p>
                        <p>Hotel: ${prod.hotel}</p>
                        <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
                        <p>Tipo de Habitación: ${prod.roomtype}</p>
                        <p>Fecha de Ingreso: ${prod.checkin}</p>
                        <p>Fecha de Salida: ${prod.checkout}</p>
                        <p>Estado Reserva: ${prod.state}</p>
                        <button data-id="${prod._id}">Eliminar</button>
                    </div>
                `
          )
          .join(""); // Une todos los elementos generados en un solo string HTML

        // Función para eliminar reservas por ID
        // Itera sobre cada reserva para asignar un evento 'click' al botón de eliminación
        prods.forEach((prod) => {
          const deleteButton = document.querySelector(
            `[data-id="${prod._id}"]`
          );

          // Evento 'click' para eliminar una reserva específica
          deleteButton.onclick = async () => {
            // Realiza una solicitud DELETE a la API para eliminar la reserva
            await fetch(`/product/${prod._id}`, {
              method: "DELETE", // Define el método HTTP como DELETE
              headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
            });

            // Elimina el elemento visualmente del DOM tras la eliminación exitosa
            deleteButton.parentElement.remove();
            alert("Reserva eliminada con éxito"); // Muestra un mensaje de éxito
          };
        });
      } else {
        // Si no se encuentran reservas, muestra un mensaje al usuario
        hotelResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
      }
    } catch (error) {
      // Maneja los errores de la solicitud o del código y muestra un mensaje explicativo
      document.getElementById(
        "hotel-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};
```

El Fetch hace referencia al EndPoint `/product/hotel` con el metodo GET que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.searchByHotel`.

```
app.get("/product/hotel", isAuthenticated, prod.searchByHotel); // Ruta para buscar productos por hotel (requiere autenticación)
```

La logica de la función controladora `prod.searchByHotel` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
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
```

- ##### 3.3- LEER PRODUCTO ESPECÍFICO POR DATO HABITACIÓN

* [OK] Permitir la búsqueda de productos (reservas) por tipo de habitación.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar rango de fechas de las reservas.

```
 <h1>3.3.- EndPoint de Productos - Leer Producto Específico por Dato Habitación</h1>
          <h2>Buscar Reserva por Tipo de Habitación</h2>
            <form id="search-room">
                <label>Tipo de Habitación:</label>
                    <select id="roomtype-name">
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Double Queen">Double Queens</option>
                        <option value="Double Kings">Double Kings</option>
                        <option value="Master Suite">Master Suite</option>
                    </select>
            <button type="submit">Buscar</button>
            </form>
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="rooms-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByRoomType` que realiza un Fetch a `/product/roomtype?roomtype=TIPO DE HABITACIÓN` y despliega los resultados en una plantilla en el contendor creado para este fin.

```
//// Función de Controlador para Listar las Reservas de Pasajeros por tipo de Habitación

const searchUsersByRoomType = () => {
  // Obtiene el formulario para buscar reservas por tipo de habitación
  const searchRoomForm = document.getElementById("search-room");

  // Asigna un evento 'submit' al formulario
  searchRoomForm.onsubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página por defecto

    // Obtiene el tipo de habitación seleccionado por el usuario
    const roomName = document.getElementById("roomtype-name");
    console.log(roomName.value); // Imprime el valor seleccionado en la consola (para depuración)
    const roomSelected = roomName.value; // Guarda el valor del tipo de habitación

    try {
      // Realiza una solicitud a la API para obtener las reservas del tipo de habitación seleccionado
      const response = await fetch(
        `/product/roomtype?roomtype=${encodeURIComponent(roomSelected)}`,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para autenticación
          },
        }
      );

      // Verifica si la respuesta es exitosa, de lo contrario lanza un error
      if (!response.ok) {
        throw new Error(
          "No se encontraron habitaciones para el tipo especificado."
        );
      }

      // Convierte la respuesta de la API a formato JSON
      const prods = await response.json();

      // Selecciona el contenedor donde se mostrarán los resultados de la búsqueda
      const roomsResults = document.getElementById("rooms-results");

      if (prods.length > 0) {
        // Genera dinámicamente el HTML para mostrar las reservas encontradas
        roomsResults.innerHTML = prods
          .map(
            (prod) => `
                    <div>
                        <h3>Reserva a Nombre de: ${prod.name}</h3>
                        <p>ID de la Reserva: ${prod._id}</p>
                        <p>Hotel: ${prod.hotel}</p>
                        <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
                        <p>Tipo de Habitación: ${prod.roomtype}</p>
                        <p>Fecha de Ingreso: ${prod.checkin}</p>
                        <p>Fecha de Salida: ${prod.checkout}</p>
                        <p>Estado Reserva: ${prod.state}</p>
                        <button data-id="${prod._id}">Eliminar</button>
                    </div>
                `
          )
          .join(""); // Une todos los elementos HTML generados en un solo string

        // Asigna controladores para eliminar reservas por ID
        prods.forEach((prod) => {
          // Selecciona el botón de eliminar para cada reserva
          const deleteButton = document.querySelector(
            `[data-id="${prod._id}"]`
          );

          // Evento 'click' para eliminar una reserva específica
          deleteButton.onclick = async () => {
            // Realiza una solicitud DELETE a la API para eliminar la reserva
            await fetch(`/product/${prod._id}`, {
              method: "DELETE", // Define el método HTTP como DELETE
              headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
            });

            // Elimina el elemento visualmente del DOM tras la eliminación exitosa
            deleteButton.parentElement.remove();
            alert("Reserva eliminada con éxito"); // Muestra un mensaje de éxito
          };
        });
      } else {
        // Si no se encuentran reservas, muestra un mensaje al usuario
        roomsResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
      }
    } catch (error) {
      // Maneja errores y muestra un mensaje explicativo al usuario
      document.getElementById(
        "rooms-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};


```

El Fetch hace referencia al EndPoint `/product/roomtype` con el metodo GET que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.searchRoomType`.

```
app.get("/product/roomtype", isAuthenticated, prod.searchRoomType); // Ruta para buscar productos por tipo de habitación (requiere autenticación)
```

La logica de la función controladora `prod.searchRoomType` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
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

```

- ##### 3.4.- LEER PRODUCTO ESPECÍFICO POR RANGO DE FECHAS

* [OK] Permitir la búsqueda de productos (reservas) por rango de fechas.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el tipo de habitación de la reserva.

```
h1>3.4.- EndPoint de Productos - Leer Producto Específico por Rango de Fechas</h1>
         <h2>Buscar Reservas por Rango de Fechas</h2>
            <form id="search-dates">
                <label>Fecha de Inicio:</label>
                <input type="date" id="start-date" name="start-date" />
                <label>Fecha de Fin:</label>
                <input type="date" id="end-date" name="end-date" />
            <button type="submit">Buscar</button>
            </form>
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="date-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByDateRange` que realiza un Fetch a `//product/dates?start=FECHA INICIO&end=FECHA FIN` y despliega los resultados en una plantilla en el contendor creado para este fin.

```
//// Función de Controlador para Listar las Reservas de Pasajeros por rango de fechas

const searchUsersByDateRange = () => {
  // Obtiene el formulario para buscar reservas por rango de fechas
  const searchDateForm = document.getElementById("search-dates");

  // Asigna un evento 'submit' al formulario
  searchDateForm.onsubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtiene las fechas de check-in y check-out ingresadas por el usuario
    const dateCheckIn = document.getElementById("start-date");
    const dateCheckOut = document.getElementById("end-date");
    const checkinSelected = dateCheckIn.value; // Fecha de inicio seleccionada
    const checkoutSelected = dateCheckOut.value; // Fecha de fin seleccionada

    try {
      // Realiza una solicitud a la API para obtener las reservas dentro del rango de fechas
      const response = await fetch(
        `/product/dates?start=${encodeURIComponent(
          checkinSelected
        )}&end=${encodeURIComponent(checkoutSelected)}`,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para la autenticación
          },
        }
      );

      // Si la respuesta no es exitosa, lanza un error con un mensaje
      if (!response.ok) {
        throw new Error(
          "No se encontraron reservas para el rango de fechas especificado."
        );
      }

      // Convierte la respuesta a formato JSON para acceder a los datos
      const prods = await response.json();

      // Obtiene el contenedor donde se mostrarán los resultados de la búsqueda
      const datesResults = document.getElementById("date-results");

      if (prods.length > 0) {
        // Genera y muestra el HTML con las reservas encontradas
        datesResults.innerHTML = prods
          .map(
            (prod) => `
                    <div>
                        <h3>Reserva a Nombre de: ${prod.name}</h3>
                        <p>ID de la Reserva: ${prod._id}</p>
                        <p>Hotel: ${prod.hotel}</p>
                        <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
                        <p>Tipo de Habitación: ${prod.roomtype}</p>
                        <p>Fecha de Ingreso: ${prod.checkin}</p>
                        <p>Fecha de Salida: ${prod.checkout}</p>
                        <p>Estado Reserva: ${prod.state}</p>
                        <button data-id="${prod._id}">Eliminar</button>
                    </div>
                `
          )
          .join(""); // Une todos los elementos generados en un solo string HTML

        // Controlador para Borrar Reserva de Pasajero por ID
        // Asocia un evento 'click' a cada botón generado dinámicamente para eliminar reservas
        prods.forEach((prod) => {
          const deleteButton = document.querySelector(
            `[data-id="${prod._id}"]`
          );

          // Evento 'click' para eliminar una reserva específica
          deleteButton.onclick = async () => {
            // Realiza una solicitud DELETE a la API para eliminar la reserva
            await fetch(`/product/${prod._id}`, {
              method: "DELETE", // Define el método HTTP como DELETE
              headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
            });

            // Elimina el elemento del DOM después de borrar la reserva
            deleteButton.parentElement.remove();
            alert("Reserva eliminada con éxito"); // Muestra un mensaje de éxito
          };
        });
      } else {
        // Si no se encuentran reservas, muestra un mensaje al usuario
        datesResults.innerHTML = `<p>No se encontraron reservas en el rango de fechas especificado.</p>`;
      }
    } catch (error) {
      // Maneja los errores de la solicitud o del código y muestra un mensaje explicativo
      document.getElementById(
        "date-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};
```

El Fetch hace referencia al EndPoint `/product/dates` con el metodo GET que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.searchByDates`.

```
app.get("/product/dates", isAuthenticated, prod.searchByDates); // Ruta para buscar productos por rango de fechas (requiere autenticación)
```

La logica de la función controladora `prod.searchByDates` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
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

```

- ##### 3.5- LEER PRODUCTO ESPECÍFICO POR DATO PASAJEROS

* [OK] Permitir la búsqueda de productos (reservas) por dato de los pasajeros.

En el Archivo `/app/main.js` se crea el formulario para buscar por datos de los pasajeros.

```
 <h1>3.5.- EndPoint de Productos - Leer Producto Específico por Dato Pasajeros</h1>
          <h2>Buscar Reserva por N° de Adultos</h2>
            <form id="search-numpassengers">
                <label>Pasajeros Adultos en la Reserva:</label>
                <input type="text" id="search-adults" placeholder="Ingrese el N° de Adultos en la reserva" />
            <button type="submit">Buscar</button>
            </form>
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="adults-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByNumPassengers` que realiza un Fetch a `/product/adults?adults=N° DE ADULTOS` y despliega los resultados en una plantilla en el contendor creado para este fin.

```
//// Función Controlador para Listar las Reservas de Pasajeros por Número de Adultos

const searchUsersByNumPassengers = () => {
  // Obtiene el formulario para buscar reservas por número de adultos
  const searchAdultForm = document.getElementById("search-numpassengers");

  // Agrega un evento 'submit' al formulario
  searchAdultForm.onsubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtiene el valor del número de adultos ingresado por el usuario
    const adults = document.getElementById("search-adults").value.trim();

    try {
      // Realiza una solicitud a la API para obtener las reservas que coincidan con el número de adultos especificado
      const response = await fetch(
        `/product/adults?adults=${encodeURIComponent(adults)}`,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para la autenticación
          },
        }
      );

      // Si la respuesta no es exitosa, lanza un error
      if (!response.ok) {
        throw new Error(
          "No se encontraron resultados para el N° especificado."
        );
      }

      // Convierte la respuesta a formato JSON para acceder a los datos
      const prods = await response.json();

      // Obtiene el contenedor donde se mostrarán los resultados
      const adultsResults = document.getElementById("adults-results");

      if (prods.length > 0) {
        // Genera y muestra el HTML con las reservas encontradas
        adultsResults.innerHTML = prods
          .map(
            (prod) => `
                    <div>
                        <h3>Reserva a Nombre de: ${prod.name}</h3>
                        <p>ID de la Reserva: ${prod._id}</p>
                        <p>Hotel: ${prod.hotel}</p>
                        <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
                        <p>Tipo de Habitación: ${prod.roomtype}</p>
                        <p>Fecha de Ingreso: ${prod.checkin}</p>
                        <p>Fecha de Salida: ${prod.checkout}</p>
                        <p>Estado Reserva: ${prod.state}</p>
                        <button data-id="${prod._id}">Eliminar</button>
                    </div>
                `
          )
          .join(""); // Une todos los elementos generados en un solo string HTML

        // Función Controlador para Borrar Reserva de Pasajero por ID

        // Asocia el evento de eliminación a cada botón generado dinámicamente
        prods.forEach((prod) => {
          const deleteButton = document.querySelector(
            `[data-id="${prod._id}"]`
          );

          // Agrega un evento 'click' para eliminar la reserva
          deleteButton.onclick = async () => {
            // Realiza una solicitud DELETE a la API para borrar la reserva
            await fetch(`/product/${prod._id}`, {
              method: "DELETE", // Define el método HTTP
              headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
            });

            // Elimina el elemento del DOM después de eliminar la reserva
            deleteButton.parentElement.remove();
            alert("Reserva eliminada con éxito"); // Muestra un mensaje de éxito
          };
        });
      } else {
        // Si no se encuentran reservas, muestra un mensaje indicando el resultado
        adultsResults.innerHTML = `<p>No se encontraron reservas con N° de adultos especificado.</p>`;
      }
    } catch (error) {
      // Maneja los errores de la solicitud o del código y muestra el mensaje de error
      document.getElementById(
        "adults-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};
```

El Fetch hace referencia al EndPoint `/product/adults` con el metodo GET que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.searchByNumPassengers`.

```
app.get("/product/adults", isAuthenticated, prod.searchByNumPassengers); // Ruta para buscar productos por número de pasajeros adultos (requiere autenticación)
```

La logica de la función controladora `prod.searchByNumPassengers` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
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
```

- ##### 3.6- LEER PRODUCTO ESPECÍFICO POR DATO ESTADO

* [OK] Permitir la búsqueda de productos (reservas) por dato estado de la reserva.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el número de adutlos de las reservas.

```
       <h1>3.6.- EndPoint de Productos - Leer Producto Específico por Dato Estado</h1>
          <h2>Buscar Reserva por Estado</h2>
            <form id="search-state">
                <label>Tipo de Estado:</label>
                    <select id="state-name">
                        <option value="Creada">Creada</option>
                        <option value="Modificada">Modificada</option>
                    </select>
            <button type="submit">Buscar</button>
            </form>
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="state-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByState` que realiza un Fetch a `/product/state?state=ESTADO DE LA RESERVA` y despliega los resultados en una plantilla en el contendor creado para este fin.

```
//// Función de Controlador para Listar las Reservas de Pasajeros por Estado de Reserva

const searchUsersByState = () => {
  // Obtiene el formulario de búsqueda por estado de reserva
  const searchStateForm = document.getElementById("search-state");

  // Agrega un evento 'submit' al formulario
  searchStateForm.onsubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtiene el estado seleccionado del campo de selección
    const stateName = document.getElementById("state-name");
    const stateSelected = stateName.value; // Guarda el valor seleccionado

    try {
      // Realiza una solicitud a la API para obtener reservas con el estado especificado
      const response = await fetch(
        `/product/state?state=${encodeURIComponent(stateSelected)}`,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"), // Incluye el token JWT para autorización
          },
        }
      );

      // Si la respuesta no es exitosa, lanza un error
      if (!response.ok) {
        throw new Error(
          "No se encontraron reservas para el estado especificado."
        );
      }

      // Convierte la respuesta a formato JSON para acceder a los datos
      const prods = await response.json();

      // Obtiene el contenedor donde se mostrarán los resultados
      const stateResults = document.getElementById("state-results");

      if (prods.length > 0) {
        // Genera y muestra el HTML con las reservas encontradas
        stateResults.innerHTML = prods
          .map(
            (prod) => `
                    <div>
                        <h3>Reserva a Nombre de: ${prod.name}</h3>
                        <p>ID de la Reserva: ${prod._id}</p>
                        <p>Hotel: ${prod.hotel}</p>
                        <p>Para: ${prod.numpassengers} Adultos y ${prod.numkids} Niños</p>
                        <p>Tipo de Habitación: ${prod.roomtype}</p>
                        <p>Fecha de Ingreso: ${prod.checkin}</p>
                        <p>Fecha de Salida: ${prod.checkout}</p>
                        <p>Estado Reserva: ${prod.state}</p>
                        <button data-id="${prod._id}">Eliminar</button>
                    </div>
                `
          )
          .join(""); // Une todos los elementos generados en un solo string HTML

        //// Función de Controlador para Borrar Reserva de Pasajero por ID

        // Asocia el evento de eliminación a cada botón generado dinámicamente
        prods.forEach((prod) => {
          const deleteButton = document.querySelector(
            `[data-id="${prod._id}"]`
          );

          // Agrega un evento 'click' para eliminar la reserva
          deleteButton.onclick = async () => {
            // Realiza una solicitud DELETE a la API para borrar la reserva
            await fetch(`/product/${prod._id}`, {
              method: "DELETE", // Define el método HTTP
              headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
            });

            // Elimina el elemento del DOM después de eliminar la reserva
            deleteButton.parentElement.remove();
            alert("Reserva eliminada con éxito"); // Muestra un mensaje de éxito
          };
        });
      } else {
        // Si no se encuentran reservas, muestra un mensaje indicando el resultado
        stateResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
      }
    } catch (error) {
      // Maneja los errores de la solicitud o del código y muestra el mensaje de error
      document.getElementById(
        "state-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};
```

El Fetch hace referencia al EndPoint `/product/state` con el metodo GET que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.searchByState`.

```
app.get("/product/state", isAuthenticated, prod.searchByState); // Ruta para buscar productos por estado de la reserva (requiere autenticación)
```

La logica de la función controladora `prod.searchByState` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
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

```

- ##### 4.- ACTUALIZAR PRODUCTO POR DATO ID

* [OK] Permitir la actualización de la información de un producto (reserva) por ID.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el ID de la reserva a actualizar.

```
       <h1>4.- EndPoint de Productos - Actualizar Producto por Dato ID</h1>
        <h2>Modificar Reserva por ID</h2>
            <form id="update-form">
                <label>ID de la Reserva:</label>
                <input type="text" id="update-id" placeholder="Ingrese el ID de la reserva" />
                <button type="submit">Buscar</button>
            </form>
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.

```
<div id="update-results"></div>
```

Para realizar la busqueda se crea la función `updateUsersById` que realiza un Fetch a `/product/ID DE LA RESERVA` con metodo GET y despliega los resultados en un formulario con los datos precargados en el contendor creado para este fin. Una vez completado el formulario se envía donde se realiza nuevamente un Fetch a `/prodcut/"ID DE LA RESERVA"` pero está vez con el metodo PUT.

```
//// Función de Controlador para Actualizar las Reservas de Pasajeros por ID

const updateUsersById = () => {
  // Obtiene el formulario principal de actualización por su ID
  const updateUserForm = document.getElementById("update-form");

  // Agrega un evento 'submit' al formulario
  updateUserForm.onsubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la página)

    // Obtiene el ID de actualización del campo de entrada y elimina espacios en blanco
    const updateId = document.getElementById("update-id").value.trim();

    try {
      // Realiza una solicitud a la API para obtener los datos de la reserva correspondiente al ID proporcionado
      const response = await fetch(`/product/${updateId}`, {
        headers: {
          Authorization: localStorage.getItem("jwt"), // Agrega el token JWT en los encabezados para autorización
        },
      });

      // Si la respuesta no es exitosa, lanza un error
      if (!response.ok) {
        throw new Error(
          "No se encontraron reservas para el estado especificado."
        );
      }

      // Convierte la respuesta a formato JSON para acceder a los datos de la reserva
      const prod = await response.json();

      // Formatea las fechas recibidas en un formato compatible con inputs tipo "date"
      const formatDate = prod.date.split("T")[0];
      const formatCheckin = prod.checkin.split("T")[0];
      const formatCheckout = prod.checkout.split("T")[0];

      // Inserta un formulario pre-rellenado con los datos de la reserva en el DOM
      const updateResults = document.getElementById("update-results");
      updateResults.innerHTML = `
                <div>
                   <form id="update-user-form">
                        <!-- Campos del formulario con valores pre-rellenados -->
                        <div>
                            <label>Nombre</label>
                            <input name="name" value="${prod.name}" />
                        </div>
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <input name="date" type="date" value="${formatDate}" />
                        </div>
                        <div>
                            <label>Ciudad</label>
                            <input name="city" type="text" value="${
                              prod.city
                            }" />
                        </div>
                        <div>
                            <label>Hotel</label>
                            <select name="hotel">
                                <!-- Opciones del hotel con selección basada en los datos recibidos -->
                                <option value="Paraiso" ${
                                  prod.hotel === "Paraiso" ? "selected" : ""
                                }>Paraiso</option>
                                <option value="Niagara" ${
                                  prod.hotel === "Niagara" ? "selected" : ""
                                }>Niagara</option>
                                <option value="Cozumel" ${
                                  prod.hotel === "Cozumel" ? "selected" : ""
                                }>Cozumel</option>
                                <option value="En Sueño" ${
                                  prod.hotel === "En Sueño" ? "selected" : ""
                                }>En Sueño</option>
                            </select>
                        </div>
                        <div>
                            <label>N° de Adultos</label>
                            <select name="numpassengers">
                                <!-- Opciones para el número de adultos -->
                                <option value="1" ${
                                  prod.numpassengers === 1 ? "selected" : ""
                                }>1</option>
                                <option value="2" ${
                                  prod.numpassengers === 2 ? "selected" : ""
                                }>2</option>
                                <option value="3" ${
                                  prod.numpassengers === 3 ? "selected" : ""
                                }>3</option>
                                <option value="4" ${
                                  prod.numpassengers === 4 ? "selected" : ""
                                }>4</option>
                                <option value="5" ${
                                  prod.numpassengers === 5 ? "selected" : ""
                                }>5</option>
                            </select>
                        </div>
                        <div>
                            <label>N° de Niños</label>
                            <select name="numkids">
                                <!-- Opciones para el número de niños -->
                                <option value="0" ${
                                  prod.numkids === 0 ? "selected" : ""
                                }>0</option>
                                <option value="1" ${
                                  prod.numkids === 1 ? "selected" : ""
                                }>1</option>
                                <option value="2" ${
                                  prod.numkids === 2 ? "selected" : ""
                                }>2</option>
                                <option value="3" ${
                                  prod.numkids === 3 ? "selected" : ""
                                }>3</option>
                                <option value="4" ${
                                  prod.numkids === 4 ? "selected" : ""
                                }>4</option>
                            </select>
                        </div>
                        <div>
                            <label>Tipo de Habitación</label>
                            <select name="roomtype">
                                <!-- Opciones para el tipo de habitación -->
                                <option value="Single" ${
                                  prod.roomtype === "Single" ? "selected" : ""
                                }>Single</option>
                                <option value="Double" ${
                                  prod.roomtype === "Double" ? "selected" : ""
                                }>Double</option>
                                <option value="Double Queen" ${
                                  prod.roomtype === "Double Queen"
                                    ? "selected"
                                    : ""
                                }>Double Queen</option>
                                <option value="Double Kings" ${
                                  prod.roomtype === "Double Kings"
                                    ? "selected"
                                    : ""
                                }>Double Kings</option>
                                <option value="Master Suite" ${
                                  prod.roomtype === "Master Suite"
                                    ? "selected"
                                    : ""
                                }>Master Suite</option>
                            </select>
                        </div>
                        <div>
                            <label>Fecha de Ingreso</label>
                            <input name="checkin" type="date" value="${formatCheckin}" />
                        </div>
                        <div>
                            <label>Fecha de Salida</label>
                            <input name="checkout" type="date" value="${formatCheckout}" />
                        </div>
                        <div>
                            <label>Estado de la Reserva</label>
                            <input type="text" name="state" value="Modificada" readonly>
                        </div>

                        <button type="submit">Actualizar</button>
                    </form>
                </div>
            `;

      // Agrega un evento 'submit' al nuevo formulario generado
      const updateUserForm = document.getElementById("update-user-form");
      updateUserForm.onsubmit = async (e) => {
        e.preventDefault(); // Evita la recarga de la página

        // Convierte los datos del formulario en un objeto
        const formData = new FormData(updateUserForm);
        const data = Object.fromEntries(formData.entries());

        // Realiza una solicitud PUT para actualizar los datos en el servidor
        const updateResponse = await fetch(`/product/${updateId}`, {
          method: "PUT",
          body: JSON.stringify(data), // Envía los datos en formato JSON
          headers: {
            "Content-Type": "application/json", // Especifica el tipo de contenido
            Authorization: localStorage.getItem("jwt"), // Incluye el token JWT
          },
        });

        // Manejo de la respuesta de actualización
        if (updateResponse.ok) {
          alert("Usuario actualizado con éxito."); // Muestra un mensaje de éxito
          updateResults.innerHTML = ""; // Limpia los resultados del formulario
        } else {
          alert("Error al actualizar el usuario."); // Muestra un mensaje de error
        }
      };
    } catch (error) {
      // Muestra el mensaje de error en caso de que ocurra un problema
      document.getElementById(
        "update-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
};
```

Los Fetchs hacen referencia a los EndPoint `/product/:id` con el metodo GET y el metodo PUT que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.update`.

```
app.put("/product/:id", isAuthenticated, prod.update); // Ruta para actualizar un producto específico por ID (requiere autenticación)
```

La logica de la función controladora `prod.update` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
// Controlador para Actualizar un Producto Existente
  update: async (req, res) => {
    const { id } = req.params; // Extrae el ID del producto desde los parámetros de la URL
    const prod = await Prods.findOne({ _id: id }); // Busca el producto en la base de datos usando el ID
    Object.assign(prod, req.body); // Asigna los nuevos datos del cuerpo de la solicitud al producto
    await prod.save(); // Guarda los cambios en el producto
    res.sendStatus(204); // Responde con un código de estado 204 (sin contenido) indicando éxito
  },
```

- ##### 5.- ELIMINACIÓN DE RESERVA

* [OK] Permitir la eliminación de una reserva.

Dentro de todas las funciones anteriormente mencionadas, excepto la creación de reservas y la actualizacion de reservas, se crea una función que a continuación del despliegue de resultados incopora un botón "Eliminar" que realiza un Fetch a `/product/:id` y ejecuta el siguiente codigo expresado en `/app/main.js`:

```
//// Función de Controlador para Borrar Reserva de Pasajero por ID

        // Asocia el evento de eliminación a cada botón generado dinámicamente
        prods.forEach((prod) => {
          const deleteButton = document.querySelector(
            `[data-id="${prod._id}"]`
          );

          // Agrega un evento 'click' para eliminar la reserva
          deleteButton.onclick = async () => {
            // Realiza una solicitud DELETE a la API para borrar la reserva
            await fetch(`/product/${prod._id}`, {
              method: "DELETE", // Define el método HTTP
              headers: { Authorization: localStorage.getItem("jwt") }, // Incluye el token JWT
            });

            // Elimina el elemento del DOM después de eliminar la reserva
            deleteButton.parentElement.remove();
            alert("Reserva eliminada con éxito"); // Muestra un mensaje de éxito
          };
        });
      } else {
        // Si no se encuentran reservas, muestra un mensaje indicando el resultado
        stateResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
      }
    } catch (error) {
      // Maneja los errores de la solicitud o del código y muestra el mensaje de error
      document.getElementById(
        "state-results"
      ).innerHTML = `<p>${error.message}</p>`;
    }
  };
```

El Fetch hace referencia al EndPoint `/prodcut/:id` con el metodo DELETE que es utilizado por Express en el archivo `/apiProds.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `prod.destroy`.

```
app.delete("/product/:id", isAuthenticated, prod.destroy); // Ruta para eliminar un producto por ID (requiere autenticación)
```

La logica de la función controladora `prod.destroy` del EndPoint se encuentra en su archivo controlador `/controllers/prod.controller.js` y es la siguiente:

```
// Controlador para Eliminar un Producto por ID
  destroy: async (req, res) => {
    const { id } = req.params; // Extrae el ID del producto desde los parámetros de la URL
    const prod = await Prods.findOne({ _id: id }); // Busca el producto en la base de datos usando el ID
    if (prod) {
      await prod.deleteOne({ _id: id }); // Elimina el producto si es encontrado
    }
    res.sendStatus(204); // Responde con un código de estado 204 (sin contenido) indicando éxito
  },

```

- ##### 6.- ALMACENAMIENTO DE DATOS DE RESERVAS

* [OK] Almacenar los datos de las reservas en una estructura de datos.

Para el almacenamiento de los datos se utilizo el sistema de base de datos MongoDB Atlas y su servicio gratuito y en Node.JS se instalaron las dependecias de Mongoose paquete para conectar y administrar bases de datos de MongoDB.

Los datos fueron almacenados según en los archivos de modelos `/models/Prod.js` y `/models/Auth.js` con las siguientes estructuras

`/models/Prod.js`

```
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

```

`/models/Auth.js`

```
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

```

## G.- CRITERIOS DE EVALUACIÓN

La calificación será definida en base a los siguientes criterios:

| ÁREA                                                 | % DEL TOTAL |
| ---------------------------------------------------- | :---------: |
| Arquitectura de carpetas y organización de código    |     30%     |
| Implementación de autenticación y autorización       |     20%     |
| Implementación de modelado de producto               |     20%     |
| Uso adecuado del control de versiones (Git & GitHub) |     20%     |
| Entrega a tiempo                                     |     10%     |

## H.- ENTREGA A TIEMPO

Entregas

- El plazo de entre es 02/02/2025
