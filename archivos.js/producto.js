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
   
let data = [{
  "id": 1,
  "autos": "Tag: The Assassination Game (a.k.a. Everybody Gets It in the End)",
  "detail": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "img": "http://dummyimage.com/129x100.png/ff4444/ffffff",
  "price": 13,
  "stock": 24
}, {
  "id": 2,
  "autos": "English Patient, The",
  "detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "img": "http://dummyimage.com/242x100.png/dddddd/000000",
  "price": 74,
  "stock": 26
}, {
  "id": 3,
  "autos": "Three-Step Dance",
  "detail": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/245x100.png/ff4444/ffffff",
  "price": 86,
  "stock": 98
}, {
  "id": 4,
  "autos": "Remote Control",
  "detail": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "img": "http://dummyimage.com/170x100.png/cc0000/ffffff",
  "price": 27,
  "stock": 80
}, {
  "id": 5,
  "autos": "Puss in Boots",
  "detail": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "img": "http://dummyimage.com/128x100.png/5fa2dd/ffffff",
  "price": 97,
  "stock": 53
}, {
  "id": 6,
  "autos": "Cinema Verite",
  "detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "img": "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
  "price": 62,
  "stock": 17
}, {
  "id": 7,
  "autos": "Kes",
  "detail": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "img": "http://dummyimage.com/124x100.png/cc0000/ffffff",
  "price": 50,
  "stock": 24
}, {
  "id": 8,
  "autos": "BFFs",
  "detail": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "img": "http://dummyimage.com/100x100.png/dddddd/000000",
  "price": 81,
  "stock": 57
}, {
  "id": 9,
  "autos": "Russia 88",
  "detail": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "img": "http://dummyimage.com/218x100.png/ff4444/ffffff",
  "price": 31,
  "stock": 19
}, {
  "id": 10,
  "autos": "Being Human",
  "detail": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "img": "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
  "price": 84,
  "stock": 3
}]



let producto = data.find((productos) => productos.id === id);


 const card1 = `<div class="card" style="width: 18rem;">
  <img src="${productos.imagen}" class="card-img-top" alt="imagen ${productos.id}" style="object-fit: cover; width: 100%; height: 150px;"/>
  <div class="card-body">
    <h1 class="card-title">${productos.autos}</h1>
    <h5 class="card-text">${productos.detalle}</h5>
    <h5 class="card-text">${productos.stock}</h5>
     <h5 class="card-text">${productos.precio}</h5>
    <a href="./producto.html?prod=${productos.id}" class="."><button></button></a>
  </div>
</div>`;


document.querySelector(".container").innerHTML = card1