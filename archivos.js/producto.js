class productos {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
   
}
 let prod = new productos("mustang", "muy caro", 1, 100000000,  "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg") 

 const card1 = `<div class="card" style="width: 18rem;">
  <img src="${prod.imagen}" class="card-img-top" alt="imagen ${prod.titulo}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h1 class="card-title">${prod.titulo}</h1>
    <h5 class="card-text">${prod.detalle}</h5>
    <h5 class="card-text">${prod.stock}</h5>
     <h5 class="card-text">${prod.precio}</h5>
    <a href="e-comerce.html" class="btn btn-primary">comprar</a>
  </div>
</div>`;


document.querySelector("div").innerHTML = card1