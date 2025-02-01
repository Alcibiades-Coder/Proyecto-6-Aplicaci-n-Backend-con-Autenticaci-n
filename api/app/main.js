// Función que carga una plantilla HTML en el contenido del cuerpo del documento.
const loadInitialTemplate = () => {
  // Define la estructura HTML de la plantilla como una cadena de texto.
  const template = `
        <!-- Navbar -->
        <!-- Sección superior fija de la página que contiene enlaces de navegación -->
<div class="w3-top">
  <div class="w3-bar w3-red w3-card w3-left-align w3-large">
    <!-- Botón para menú desplegable en pantallas pequeñas -->
    <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <!-- Enlaces de navegación -->
    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-white">Inicio</a>
    <a href="#crear-prod" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Crear</a>
    <a href="#leer-all-prod" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Leer Todos</a>
    <a href="#leer-prod" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Leer por Dato</a>
    <a href="#actualizar-prod" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Actualizar</a>
    <a href="#borrar-prod" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Eliminar</a>
    <a href="#admin-usr" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Admin</a>
  </div>

  <!-- Menú de navegación para pantallas pequeñas -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
    <a href="#" class="w3-bar-item w3-button w3-padding-large">Crear</a>
    <a href="#crear-prod" class="w3-bar-item w3-button w3-padding-large">Crear</a>
    <a href="#leer-all-prod" class="w3-bar-item w3-button w3-padding-large">Leer Todos</a>
    <a href="#leer-prod" class="w3-bar-item w3-button w3-padding-large">Leer por Dato</a>
    <a href="#actualizar-prod" class="w3-bar-item w3-button w3-padding-large">Actualizar</a>
    <a href="#borrar-prod" class="w3-bar-item w3-button w3-padding-large">Eliminar</a>
    <a href="#admin-usr" class="w3-bar-item w3-button w3-padding-large">Admin</a>
  </div>
</div>

<!-- Encabezado principal con descripción del proyecto -->
<header class="w3-container w3-red w3-center" style="padding:128px 16px">
  <h1 class="w3-margin w3-jumbo">App de BackEnd con Autenticación</h1>
  <p class="w3-xlarge">En este proyecto, el objetivo fue construir una aplicación backend que administre la autenticación y autorización de los usuarios...</p>
</header>

<br id="crear-prod">
<!-- Sección para la creación de reservas -->
<div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
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
       <br>
    <br>
    <br id="leer-all-prod">
    <br id="borrar-prod">
    <br>
    <br>
        <h1>2.- EndPoint de Productos- Leer todos los Productos</h1>
        <h1>5.- EndPoint de Productos- Borrar un Producto</h1>
              <h2>Listado de Reservas</h2>
                    <ul id="user-list"></ul>   
                
    
    <br>
    <br>
    <br id="leer-prod">
    <br>
    <br>
        <h1>3.1.- EndPoint de Productos - Leer Producto Específico por ID</h1>  
            <h2>Buscar Reserva por ID</h2>
                <form id="search-form">
                    <label>ID de la Reserva:</label>
                    <input type="text" id="search-id" placeholder="Ingrese el ID de la reserva" />
                    <button type="submit">Buscar</button>
                </form>
                <div id="search-results"></div>
    <br>
    <br>
    <br>
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
          <div id="hotel-results"></div>
    <br>
    <br>
    <br>
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
        <div id="rooms-results"></div>
    <br>
    <br>
    <br>
        <h1>3.4.- EndPoint de Productos - Leer Producto Específico por Rango de Fechas</h1>
         <h2>Buscar Reservas por Rango de Fechas</h2>
            <form id="search-dates">
                <label>Fecha de Inicio:</label>
                <input type="date" id="start-date" name="start-date" />
                <label>Fecha de Fin:</label>
                <input type="date" id="end-date" name="end-date" />
            <button type="submit">Buscar</button>
            </form>
        <div id="date-results"></div>
    <br>
    <br>
    <br>
        <h1>3.5.- EndPoint de Productos - Leer Producto Específico por Dato Pasajeros</h1>
          <h2>Buscar Reserva por N° de Adultos</h2>
            <form id="search-numpassengers">
                <label>Pasajeros Adultos en la Reserva:</label>
                <input type="text" id="search-adults" placeholder="Ingrese el N° de Adultos en la reserva" />
            <button type="submit">Buscar</button>
            </form>        
        <div id="adults-results"></div>

    <br>
    <br>
    <br>
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
        <div id="state-results"></div>

    <br>
    <br>
    <br id="actualizar-prod">
    <br>
    <br>
        <h1>4.- EndPoint de Productos - Actualizar Producto por Dato ID</h1>
        <h2>Modificar Reserva por ID</h2>
            <form id="update-form">
                <label>ID de la Reserva:</label>
                <input type="text" id="update-id" placeholder="Ingrese el ID de la reserva" />
                <button type="submit">Buscar</button>
            </form>        
        <div id="update-results"></div>
    </div>
    <br>
    <br>
    <br>
    
    <div class="w3-third w3-center">
      <i class="fa fa-anchor w3-padding-64 w3-text-red"></i>
    </div>
  </div>
</div>
<br id="admin-usr">
<!-- Second Grid -->
<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-third w3-center">
      <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
    </div>

    <div class="w3-twothird">
    <h1>EndPoints de Usuarios</h1>  
    <h1>4.-EndPoint de Usuarios - Cambiar Contraseña de un Usuario</h1>  
      
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
        
        <div id="error" style="color: red; margin-top: 10px;"></div>
    </div>
  </div>
</div>


<div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">Trabajo Realizado por Alcibiades Oyarzún DWFS16</h1>
</div>


<footer class="w3-container w3-padding-64 w3-center w3-opacity">  
  <!-- Pie de página con enlaces a redes sociales y créditos -->
  <p>Template de Página de <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer>
`;

  // Inserta la plantilla generada en el cuerpo del documento.
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = template;
};

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

//// Listener para el Formulario de Actualización de Pasajeros
const addUpdateFormListener = () => {
  // Selecciona el formulario con el ID "user-form"
  const userForm = document.getElementById("user-form");

  // Asigna un evento al enviar el formulario
  userForm.onsubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtiene los datos del formulario y los convierte en un objeto
    const formData = new FormData(userForm);
    const data = Object.fromEntries(formData.entries());

    // Envía los datos a la API mediante un POST para actualizar un pasajero
    await fetch("/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"), // Token JWT para autenticación
      },
    });

    // Resetea el formulario y actualiza la lista de usuarios
    userForm.reset();
    getUsers();
  };
};

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

//// Listeners para ir a Formulario de Login o Register
const gotoLoginListener = () => {
  const gotoLogin = document.getElementById("login");
  gotoLogin.onclick = (e) => {
    e.preventDefault();
    loginPage(); // Carga la página de login
  };
};

const gotoRegisterListener = () => {
  const gotoRegister = document.getElementById("register");
  gotoRegister.onclick = (e) => {
    e.preventDefault();
    registerPage(); // Carga la página de registro
  };
};

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

//// Verifica si el usuario está logueado
const checkLogin = () => localStorage.getItem("jwt");

//// Carga las funciones de cada página
const bookingPage = () => {
  loadInitialTemplate();
  addFormListener();
  getUsers();
  // Carga todas las funcionalidades relacionadas con reservas
};

const registerPage = () => {
  loadRegisterTemplate();
  addRegisterListener();
  gotoLoginListener();
};

const loginPage = () => {
  loadLoginTemplate();
  addLoginListener();
  gotoRegisterListener();
};

//// Función principal al cargar la página
window.onload = () => {
  const isLoggedIn = checkLogin();
  if (isLoggedIn) {
    bookingPage(); // Si está logueado, carga la página de reservas
  } else {
    loginPage(); // Si no, carga la página de login
  }
};
