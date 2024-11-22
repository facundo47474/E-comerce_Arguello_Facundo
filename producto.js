let id = parseInt(window.location.search.split("=")[1]);

class Producto {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let cards = [
    { id: 1, name: 'Ford Mustang', description: 'Un clásico muscle car americano.', image: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2019/12/10090509/DSC05783_2-1-1160x741.jpg', price: "23.000.000", stock: "5", category: 'Nuevo' },
    { id: 2, name: 'Chevrolet Camaro', description: 'Potente y ágil, un verdadero deportivo.', image: 'https://maipuchevrolet.com.ar/wp-content/uploads/sites/4/2021/03/camaro-conversivel-2018-vermelho-gal-04-v1.jpg', price: "20.000.000", stock: "3", category: 'Nuevo' },
    { id: 3, name: 'Dodge Charger', description: 'Elegancia y potencia en un solo paquete.', image: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_3512e641b7bd42e0b6d59adffa9142f2.jpg', price: "33.000.000", stock: "3", category: 'Nuevo' },
    { id: 4, name: 'Toyota Corolla', description: 'Fiabilidad y economía de combustible.', image: 'https://fotos.perfil.com/2022/06/03/toyota-corolla-1366408.jpg', price: "222.000", stock: "3", category: 'Nuevo' },
    { id: 5, name: 'Honda Civic', description: 'Compacto, eficiente y divertido de conducir.', image: 'https://www.clarin.com/2016/12/02/rJy11gU7l_1200x0.jpg', price: "22.000.000", stock: "8", category: 'Nuevo' },
    { id: 6, name: 'Volkswagen Golf', description: 'Un hatchback versátil y atractivo.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRSxb_isvi1_MzNbdgQcE64UNIdu4g4lfjQ&s', price: "15.000.000", stock: "3", category: 'Nuevo' },
    { id: 7, name: 'Ford F-150', description: 'La camioneta más vendida en América.', image: 'https://bu-cdn.tiendup.com/business/67/products/DErBdp_5dadcd6d1fbd8_medium.jpg', price: "42.000.000", stock: "3", category: 'Nuevo' },
    { id: 8, name: 'Chevrolet Silverado', description: 'Robusta y poderosa, perfecta para el trabajo.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IIGwhb0t1uqDz6epyNwfVWJdAC4HRzzBABntmNq_TK9Xl7CWhzQFnfQzCefK00CP7_Q&usqp=CAU', price: "56.000.000", stock: "0", category: 'Nuevo' },
    { id: 9, name: 'Porsche 911', description: 'Un ícono del automovilismo con rendimiento excepcional.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrARbCUK29Vaftn6Z8ciKSCOBtIHz04etmw&s', price: "23.000.000", stock: "3", category: 'Nuevo' },
    { id: 10, name: 'Mazda Miata', description: 'Un roadster ligero y divertido.', image: 'https://http2.mlstatic.com/D_NQ_NP_968425-MLA25455511278_032017-O.webp', price: "23.000.000", stock: "3", category: 'Nuevo' },
    { id: 11, name: 'Volkswagen Beetle', description: 'Un clásico que nunca pasa de moda.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddP70PkxcRbj3-MNCmkp7mKc-Su-SEdmtog&s', price: "23.000.000", stock: "3", category: 'Usado' },
    { id: 12, name: 'Ford Bronco', description: 'Un clásico todoterreno renovado.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIgoKNBENvFU_id-z4IDiJSKKclP1FJU8xA&s', price: "23.000.000", stock: "3", category: 'Usado' },
    { id: 13, name: 'Chevrolet Impala', description: 'Un sedán espacioso y cómodo.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2014_Chevrolet_Impala_LTZ_3.6L_with_courtesy_plates%2C_front_6.1.19.jpg/1200px-2014_Chevrolet_Impala_LTZ_3.6L_with_courtesy_plates%2C_front_6.1.19.jpg', price: "23.000.000", stock: "3", category: 'Usado' },
    { id: 14, name: 'Datsun 240Z', description: 'Un clásico japonés que encanta a los coleccionistas.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwsaAMdtH2iy_NWNe_3G8yNgkMzdGrIaP9A&s', price: "34.000.000", stock: "3", category: 'Clásico' },
    { id: 15, name: 'Morris Mini', description: 'Pequeño y encantador, un ícono británico.', image: 'https://thumbs.dreamstime.com/b/mark-ii-rover-mini-cooper-montmelo-de-noviembre-aka-morris-o-austin-168293081.jpg', price: "23.000.000", stock: "3", category: 'Clásico' },
    { id: 16, name: 'Ford Model T', description: 'El automóvil que revolucionó el transporte.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYrf9OwbeeTj98qeR2UpwXpm4UFtuNEEEN9-j-LWhKDvsGL7ZyaTEzeFrZlsOiHHN-sk&usqp=CAU', price: "23.000.000", stock: "3", category: 'Clásico' },
    { id: 17, name: 'Chevrolet Bel Air', description: 'Un clásico de los años 50 con estilo.', image: 'https://www.chevrolet.com.ar/content/dam/chevrolet/sa/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960', price: "23.000.000", stock: "3", category: 'Clásico' },
    { id: 18, name: 'Jaguar E-Type', description: 'Un ícono del diseño automovilístico.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBElEsgbOnSU4FfOAaPeivEzBKgh2cC41Jg&s', price: "23.000.000", stock: "3", category: 'Clásico' },
];

let prodEncontrado = cards.find((producto) => producto.id === id);
const card1 = `<div class="card1" style="width: 18rem;">
    <img src="${prodEncontrado.image}" class="card-img-top" alt="imagen ${prodEncontrado.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
    <div class="card-body1">
        <h5 class="card-title1">${prodEncontrado.name}</h5>
        <p class="card-text1">${prodEncontrado.description}</p>
        <p class="card-text1">$${prodEncontrado.price}</p>
        <p class="card-text1">Stock: ${prodEncontrado.stock}</p>
        ${localStorage.getItem("session") ? `
        <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="restButton()">-</button>
            <input type="number" value="1" id="cart-counter" class="form-control" aria-describedby="button-addon1">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="addButton()">+</button>
        </div>
        <button class="btn btn-success" type="button" onclick="addProductToCart()">Agregar al carrito</button>
        ` : `<p>Inicia sesión para agregar productos al carrito</p>`}
    </div>
</div>`;



let cart = JSON.parse(localStorage.getItem("cart"));
if(!cart){ 
  cart = [];
}

document.querySelector(".container").innerHTML = card1;
let input = document.querySelector(".card1 input#cart-counter");
function addButton() {

  if(input.value < prodEncontrado.stock) {
    input.value = String(Number(input.value) + 1); 
  } else {
    alert("fuera de stock!");
  }
}

 function restButton() {
  if (input.value > 1) {
    input.value -= 1;
  }
}



function addProductToCart() {
  console.log(cart)
if(cart.length === 0) {
  if(parseInt(input.value) > prodEncontrado.stock) {
    alert("No hay suficiente stock");
  } else {
    cart.push({prod:prodEncontrado, quantity: parseInt(input.value)})
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location = window.location
    return
  }
} 

let existingItemIndex = cart.findIndex((card1) => card1.prod.id == prodEncontrado.id);
const foundItem = cart[existingItemIndex];
if (!foundItem) {
  cart.push({prod:prodEncontrado, quantity: parseInt(input.value)})
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location = window.location
    return
}
if ((foundItem.quantity + parseInt(input.value)) > prodEncontrado.stock) {
  alert("sin stock!");
  return
} 
foundItem.quantity += parseInt(input.value);
localStorage.setItem("cart", JSON.stringify(cart));
Toastify({

  text: "Producto agregado!",
  
  duration: 3000
  
  }).showToast()  
  window.location = window.location 
} 
function iniciarSession() {
    const usuarioAutenticado = true;

if(usuarioAutenticado){
    localStorage.removeItem("cart");
    alert("carrito eliminado");
    window.location.reload();
}
else {
    alert("Error al iniciar sesión. Verifica tus datos.");
}
}
