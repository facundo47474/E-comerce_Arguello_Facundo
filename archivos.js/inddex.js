let h1 = document.querySelector("h1").innerHTML = "productos"; 


let cards = [
    { id: 1, "name": 'Ford Mustang', "description": 'Un clásico muscle car americano.', "image": 'https://example.com/mustang.jpg', "price": "23.000.000", "stock": "5", "category": 'Nuevo' },
    { id: 2, "name": 'Chevrolet Camaro', "description": 'Potente y ágil, un verdadero deportivo.', "image": 'https://example.com/camaro.jpg', "price": "20.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 3, "name": 'Dodge Charger', "description": 'Elegancia y potencia en un solo paquete.', "image": 'https://example.com/charger.jpg', "price": "33.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 4, "name": 'Toyota Corolla', "description": 'Fiabilidad y economía de combustible.', "image": 'https://example.com/corolla.jpg', "price": "222.000", "stock": "3", "category": 'Nuevo' },
    { id: 5, "name": 'Honda Civic', "description": 'Compacto, eficiente y divertido de conducir.', "image": 'https://example.com/civic.jpg', "price": "22.000.000", "stock": "8", "category": 'Nuevo' },
    { id: 6, "name": 'Volkswagen Golf', "description": 'Un hatchback versátil y atractivo.', "image": 'https://example.com/golf.jpg', "price": "15.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 7, "name": 'Ford F-150', "description": 'La camioneta más vendida en América.', "image": 'https://example.com/f150.jpg', "price": "42.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 8, "name": 'Chevrolet Silverado', "description": 'Robusta y poderosa, perfecta para el trabajo.', "image": 'https://example.com/silverado.jpg', "price": "56.000.000", "stock": "", "category": 'Nuevo' },
    { id: 9, "name": 'Porsche 911', "description": 'Un ícono del automovilismo con rendimiento excepcional.', "image": 'https://example.com/911.jpg', "price": "23.000.000", "stock": "", "category": 'Nuevo' },
    { id: 10,"name": 'Mazda Miata', "description": 'Un roadster ligero y divertido.', "image": 'https://example.com/miata.jpg', "price": "23.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 11,"name": 'Volkswagen Beetle', "description": 'Un clásico que nunca pasa de moda.', "image": 'https://example.com/beetle.jpg', "price": "23.000.000", "stock": "3", "category": 'Usado' },
    { id: 12,"name": 'Ford Bronco', "description": 'Un clásico todoterreno renovado.', "image": 'https://example.com/bronco.jpg', "price": "23.000.000", "stock": "3", "category": 'Usado' },
    { id: 13,"name": 'Chevrolet Impala', "description": 'Un sedán espacioso y cómodo.', "image": 'https://example.com/impala.jpg', "price": "23.000.000", "stock": "3", "category": 'Usado' },
    { id: 14,"name": 'Datsun 240Z', "description2": 'Un clásico japonés que encanta a los coleccionistas.', "image": 'https://example.com/240z.jpg', "price": "34.000.000", "stock": "3", "category": 'Clásico' },
    { id: 15,"name": 'Morris Mini', "description": 'Pequeño y encantador, un ícono británico.', "image": 'https://example.com/mini.jpg', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
    { id: 16,"name": 'Ford Model T', "description": 'El automóvil que revolucionó el transporte.', "image": 'https://example.com/modelt.jpg', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
    { id: 17,"name": 'Chevrolet Bel Air', "description": 'Un clásico de los años 50 con estilo.', "image": 'https://example.com/belair.jpg', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
    { id: 18,"name": 'Jaguar E-Type', "description": 'Un ícono del diseño automovilístico.', "image": 'https://example.com/etype.jpg', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
];


function cards () {
    let cards = data.map((producto) => `<div class="card" style="width: 18rem;">
            <img src="${prodEncontrado.image}" class="card-img-top" alt="imagen ${prodEncontrado.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
            <div class="card-body">
                <h5 class="card-title">${prodEncontrado.name}</h5>
                <p class="card-text">${prodEncontrado.description}</p>
                <p class="card-text">$${prodEncontrado.price}</p>
                <p class="card-text">Stock: ${prodEncontrado.stock}</p>
                <a href="./producto.html?prod=${prodEncontrado.id}">
                    <button class="btn">Ver más</button>
                </a>
            </div>
        </div>`)
}
document.querySelector('.container').innerHTML = array.join("");

cards ();

function buscadorf() {
let inputbuscador = document.querySelector(".input");

let filterdata = data.filter((producto ) => producto.name == inputbuscador.value);
let cards = filterData.map((producto) => `<div class="card" style="width: 18rem;">
            <img src="${prodEncontrado.image}" class="card-img-top" alt="imagen ${prodEncontrado.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
            <div class="card-body">
                <h5 class="card-title">${prodEncontrado.name}</h5>
                <p class="card-text">${prodEncontrado.description}</p>
                <p class="card-text">$${prodEncontrado.price}</p>
                <p class="card-text">Stock: ${prodEncontrado.stock}</p>
                <a href="./producto.html?prod=${prodEncontrado.id}">
                    <button class="btn">Ver más</button>
                </a>
            </div>
        </div>`
    
    )
    document.querySelector('.container').innerHTML = array.join("");
};


let botonBuscador = document.querySelector(".boton");  
botonBuscador.addEventListener("click", buscadorf);

let botonesCateg = document.querySelectorAll(".category");
for (const botonData of botonesCateg) {
  botonData.addEventListener("click", () => {
    botones(botonData.innerText);
  })
}

function botones(category) {
    let dataFiltered = data.filter((producto) => producto.category == category);
    let busqueda = dataFiltered.map((producto) => {
      if(producto.category === category){
       return  `<div class="card" style="width: 18rem;">
       <img src="${prodEncontrado.image}" class="card-img-top" alt="imagen ${prodEncontrado.id}" style="object-fit: contain; width: 100%; height: 150px;"/>
       <div class="card-body">
           <h5 class="card-title">${prodEncontrado.name}</h5>
           <p class="card-text">${prodEncontrado.description}</p>
           <p class="card-text">$${prodEncontrado.price}</p>
           <p class="card-text">Stock: ${prodEncontrado.stock}</p>
           <a href="./producto.html?prod=${prodEncontrado.id}">
               <button class="btn">Ver más</button>
           </a>
       </div>
   </div>`
}

    })
    document.querySelector(".container").innerHTML = busqueda.join("");
};