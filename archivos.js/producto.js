class productos {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.stock = stock;
        this.stock = precio;
        this.imagen = imagen;
    }
   
}
 let prod = new productos("mustan", "muy caro", 1, 100000000,  "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg") 

 const card1 = `<div class="card" style="width: 18rem;">
  <img src="${prod.imagen}" class="card-img-top" alt="imagen ${prod.titulo}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h5 class="card-title">${prod.titulo}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`


document.querySelector(".Producto").innerHTML = card1