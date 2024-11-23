document.addEventListener('DOMContentLoaded', function () { 
  // Crear el HTML dentro del JS, asegurando que el navbar se quede fijo en la parte superior
  const htmlContent = `
    <header>
      <!-- Navbar fijo en la parte superior -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      
         
        </div>
      </nav>
    </header>
    <div class="compras" style="margin-top: 80px;"></div>

    <!-- Modal de Orden -->
    <div id="order-modal" class="order-modal">
      <div class="order-modal-content">
        <span class="close-modal">&times;</span>
        <h3 class="text-center">Detalles de tu Orden</h3>
        <div id="order-details" class="order-details"></div>

        <!-- Formulario de pago con campos adicionales -->
        <form id="payment-form" style="display: block;">
          <h4>Información de Pago</h4>
          <p>Selecciona tu tarjeta de crédito</p>
          <div class="card-selection">
            <img src="https://via.placeholder.com/100x60?text=Visa" alt="Visa" class="credit-card" data-card="visa" />
            <img src="https://via.placeholder.com/100x60?text=Mastercard" alt="Mastercard" class="credit-card" data-card="mastercard" />
            <img src="https://via.placeholder.com/100x60?text=Amex" alt="American Express" class="credit-card" data-card="amex" />
          </div>
          
          <!-- Campos para los datos de pago -->
          <input type="text" id="card-number" placeholder="Número de tarjeta" required />
          <input type="text" id="expiration-date" placeholder="Fecha de expiración" required />
          <input type="text" id="cvv" placeholder="CVV" required />
          
          <!-- Información de dirección de envío -->
          <h4>Dirección de Envío</h4>
          <input type="text" id="address" placeholder="Dirección" required />
          <input type="text" id="city" placeholder="Ciudad" required />
          <input type="text" id="postal-code" placeholder="Código Postal" required />
          <input type="text" id="country" placeholder="País" required />
          
          <button type="submit" class="btn btn-success">Confirmar Pago</button>
        </form>

        <!-- Botón de cancelar -->
        <button id="cancel-order" class="btn btn-danger mt-3">Cancelar Compra</button>
      </div>
    </div>
  `;

  // Insertar el HTML en el body sin reemplazar el navbar
  const bodyContent = document.querySelector("body");
  bodyContent.innerHTML = htmlContent + bodyContent.innerHTML;

  // Estilos internos
  const styleContent = `
    .order-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .order-modal-content {
      background-color: white;
      padding: 30px;
      border-radius: 10px;
      width: 80%;
      max-width: 700px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      max-height: 80%;
      overflow-y: auto;
    }

    .close-modal {
      font-size: 1.5em;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 20px;
    }

    .card-selection {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
    }

    .credit-card {
      width: 100px;
      height: 60px;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .credit-card.selected {
      border: 3px solid #007bff; /* Marca la tarjeta seleccionada con un borde azul */
      box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
    }

    .credit-card:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      width: 100%;
    }

    button[type="submit"] {
      background-color: #28a745;
      border: none;
      color: white;
      font-weight: bold;
    }

    button[type="submit"]:hover {
      background-color: #218838;
    }

    button#cancel-order {
      background-color: #dc3545;
      border: none;
      color: white;
      font-weight: bold;
    }

    button#cancel-order:hover {
      background-color: #c82333;
    }

    .compras {
      padding-top: 60px;
      margin-bottom: 80px;
    }

    h4 {
      font-size: 18px;
      color: #333;
    }

    .order-modal h3, .order-modal h4 {
      text-align: center;
    }

    .order-modal-content input:focus {
      outline: none;
      border-color: #007bff;
    }

    .order-modal .success-message {
      text-align: center;
      background-color: #28a745;
      color: white;
      padding: 15px;
      border-radius: 5px;
      font-size: 18px;
      margin-top: 20px;
    }

    /* Reducir el tamaño de la imagen en la card */
    .card img {
      width: 80px;  /* Reducido para que la imagen no sea tan grande */
      height: auto;
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.innerHTML = styleContent;
  document.head.appendChild(styleElement);

  // Cargar las cards del carrito
  const Carrito = JSON.parse(localStorage.getItem("cart")) || [];
  getCards(Carrito);

  function getCards(Carrito) {
    const list = Carrito.map(
      (card) => `
        <div class="col-xl-8" id="cards-${card.prod.id}">
          <div class="card border shadow-none">
            <div class="card-body">
              <div class="d-flex align-items-start border-bottom pb-3">
                <div class="me-4">
                  <img
                    src="${card.prod.image}"
                    alt="imagen ${card.prod.id}"
                    class="avatar-lg rounded"
                  />
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="text-truncate font-size-18">${card.prod.name}</h5>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Precio</p>
                        <h5 class="mb-0 mt-2">${card.prod.price}</h5>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Stock</p>
                        <h5 class="mb-0 mt-2">${card.prod.stock}</h5>
                        <button 
                          class="removeProduct btn btn-danger mt-3"
                          onclick="remove(${card.prod.id})"
                        >
                          Eliminar
                        </button>
                        <button class="comprar btn btn-success mt-3">Comprar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
    );
    document.querySelector(".compras").innerHTML = list.join(""); // Mostrar las cards

    // Asegurémonos de que los botones de "Comprar" tengan un eventListener
    const buyButtons = document.querySelectorAll('.comprar');
    buyButtons.forEach(button => {
      button.addEventListener('click', handleCompra); // Función para manejar la compra
    });
  }

  // Función para manejar la compra
  function handleCompra() {
    const orderModal = document.getElementById("order-modal");
    const orderDetails = document.getElementById("order-details");
    const carrito = JSON.parse(localStorage.getItem("cart"));
    const total = carrito.reduce((acc, item) => acc + item.prod.price, 0);
    
    // Mostrar detalles de la orden
    orderDetails.innerHTML = `
      <p><strong>Total:</strong> ${total}</p>
      <ul>
        ${carrito.map(item => `<li>${item.prod.name} - ${item.prod.price}</li>`).join('')}
      </ul>
    `;

    orderModal.style.display = 'flex';
  }

  // Seleccionar tarjeta de crédito
  document.querySelectorAll('.credit-card').forEach(card => {
    card.addEventListener('click', function () {
      // Eliminar la clase 'selected' de todas las tarjetas
      document.querySelectorAll('.credit-card').forEach(c => c.classList.remove('selected'));
      
      // Agregar la clase 'selected' a la tarjeta clickeada
      card.classList.add('selected');
    });
  });

  // Cerrar el modal
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById("order-modal").style.display = 'none';
  });

  // Cancelar la compra
  document.getElementById("cancel-order").addEventListener('click', () => {
    localStorage.setItem('cart', JSON.stringify([])); // Vaciar el carrito
    document.getElementById("order-modal").style.display = 'none';
    window.location.href = 'index.html'; // Redirigir a la página principal después de la cancelación
  });

  // Confirmar el pago
  document.getElementById("payment-form").addEventListener('submit', function (event) {
    event.preventDefault();

    // Aquí mostraremos el mensaje de confirmación
    alert("Compra realizada con éxito");

    // Luego redirigimos a la página principal después de que el usuario presione "OK"
    localStorage.setItem('cart', JSON.stringify([])); // Vaciar el carrito
    document.getElementById("order-modal").style.display = 'none';
    window.location.href = 'index.html'; // Redirigir a la página principal después de confirmar el pago
  });
});
