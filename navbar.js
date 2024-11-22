const navbarContainer = document.createElement('div');  
navbarContainer.classList.add('navbar');

function getCartItemCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

navbarContainer.innerHTML = `
    <div class="navbar-logo"><span>Auto</span>Luxury</div>
    <div class="navbar-menu">
        <a href="./index.html">Inicio</a>
        <a href="#autos" class="autos-link">Autos</a>
        <ul class="categorias">
          <li><a href="#" class="category">Nuevo</a></li>
          <li><a href="#" class="category">Usado</a></li>
          <li><a href="#" class="category">Clásico</a></li>
        </ul>

        <a href="#contacto" class="contacto-link">Contacto</a>
        <ul class="contacto-categorias">
          <li><a href="#">(303) 637-8619</a></li>
        </ul>

        <a href="#ofertas">Ofertas</a>
        <a href="#contacto">Contacto</a>
    </div>

    <div class="navbar-cart">
        <img src="https://github.com/julioavantt/guayerd_login/blob/main/cart.png?raw=true" alt="comprar" class="carrito" />
        <b id="cart-counter" class="text-white">${getCartItemCount()}</b>
        <button class="clear-cart-btn btn btn-outline-success">Borrar carrito</button> <!-- Nuevo botón -->
    </div>
    <div>
        ${
          localStorage.getItem("session")
            ? `<button class="btn btn-outline-success" onclick="closeSession()">Cerrar sesión</button>`
            : `<a href="./login.html"><button class="btn btn-outline-success">Iniciar sesión</button></a>`
        }
    </div>
`;

document.body.insertBefore(navbarContainer, document.body.firstChild);


document.querySelectorAll(".carrito").forEach(element => {
  element.addEventListener("click", () => {
    window.location.href = "/cart.html";
  });
});


document.querySelector(".clear-cart-btn").addEventListener("click", () => {
  localStorage.removeItem("cart"); // Borra el carrito del localStorage
  document.getElementById("cart-counter").textContent = "0"; // Actualiza el contador del carrito
});

// Función para cerrar sesión
function closeSession() {
  localStorage.clear();
  location.href = "./index.html";
}


let categoryButtons = document.querySelectorAll(".category"); 

categoryButtons.forEach(buttonData => 
  buttonData.addEventListener("click", () => {
    console.log(buttonData.innerText);
    botones(buttonData.innerText);
  })
);

function botones(category) {
  let dataFiltered = data.filter(producto => producto.category.toLowerCase() === category.toLowerCase());
  let busqueda = dataFiltered.map(producto => {
    return `
        <div class="card" style="width: 18rem;">
            <img src="${producto.image}" class="card-img-top" alt="imagen ${producto.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">${producto.description}</p>
                <p class="card-text">$${producto.price}</p>
                <p class="card-text">Stock: ${producto.stock}</p>
                <a href="/producto.html?prod=${producto.id}">
                    <button class="btn">Ver más</button>
                </a>
            </div>
        </div>
    `;
  });
  document.querySelector(".container-navbar").innerHTML = busqueda.join("");
}



