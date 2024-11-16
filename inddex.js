
let h1 = document.querySelector("h1").innerHTML = "productos";

let data = [
    { id: 1, "name": 'Ford Mustang', "description": 'Un clásico muscle car americano.', "image": 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2019/12/10090509/DSC05783_2-1-1160x741.jpg', "price": "23.000.000", "stock": "5", "category": 'Nuevo' },
    { id: 2, "name": 'Chevrolet Camaro', "description": 'Potente y ágil, un verdadero deportivo.', "image": 'https://maipuchevrolet.com.ar/wp-content/uploads/sites/4/2021/03/camaro-conversivel-2018-vermelho-gal-04-v1.jpg', "price": "20.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 3, "name": 'Dodge Charger', "description": 'Elegancia y potencia en un solo paquete.', "image": 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_3512e641b7bd42e0b6d59adffa9142f2.jpg', "price": "33.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 4, "name": 'Toyota Corolla', "description": 'Fiabilidad y economía de combustible.', "image": 'https://fotos.perfil.com/2022/06/03/toyota-corolla-1366408.jpg', "price": "222.000", "stock": "3", "category": 'Nuevo' },
    { id: 5, "name": 'Honda Civic', "description": 'Compacto, eficiente y divertido de conducir.', "image": 'https://www.clarin.com/2016/12/02/rJy11gU7l_1200x0.jpg', "price": "22.000.000", "stock": "8", "category": 'Nuevo' },
    { id: 6, "name": 'Volkswagen Golf', "description": 'Un hatchback versátil y atractivo.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRSxb_isvi1_MzNbdgQcE64UNIdu4g4lfjQ&s', "price": "15.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 7, "name": 'Ford F-150', "description": 'La camioneta más vendida en América.', "image": 'https://bu-cdn.tiendup.com/business/67/products/DErBdp_5dadcd6d1fbd8_medium.jpg', "price": "42.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 8, "name": 'Chevrolet Silverado', "description": 'Robusta y poderosa, perfecta para el trabajo.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IIGwhb0t1uqDz6epyNwfVWJdAC4HRzzBABntmNq_TK9Xl7CWhzQFnfQzCefK00CP7_Q&usqp=CAU', "price": "56.000.000", "stock": "", "category": 'Nuevo' },
    { id: 9, "name": 'Porsche 911', "description": 'Un ícono del automovilismo con rendimiento excepcional.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrARbCUK29Vaftn6Z8ciKSCOBtIHz04etmw&s', "price": "23.000.000", "stock": "", "category": 'Nuevo' },
    { id: 10,"name": 'Mazda Miata', "description": 'Un roadster ligero y divertido.', "image": 'https://http2.mlstatic.com/D_NQ_NP_968425-MLA25455511278_032017-O.webp', "price": "23.000.000", "stock": "3", "category": 'Nuevo' },
    { id: 11,"name": 'Volkswagen Beetle', "description": 'Un clásico que nunca pasa de moda.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddP70PkxcRbj3-MNCmkp7mKc-Su-SEdmtog&s', "price": "23.000.000", "stock": "3", "category": 'Usado' },
    { id: 12,"name": 'Ford Bronco', "description": 'Un clásico todoterreno renovado.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIgoKNBENvFU_id-z4IDiJSKKclP1FJU8xA&s', "price": "23.000.000", "stock": "3", "category": 'Usado' },
    { id: 13,"name": 'Chevrolet Impala', "description": 'Un sedán espacioso y cómodo.', "image": 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2014_Chevrolet_Impala_LTZ_3.6L_with_courtesy_plates%2C_front_6.1.19.jpg/1200px-2014_Chevrolet_Impala_LTZ_3.6L_with_courtesy_plates%2C_front_6.1.19.jpg', "price": "23.000.000", "stock": "3", "category": 'Usado' },
    { id: 14,"name": 'Datsun 240Z', "description": 'Un clásico japonés que encanta a los coleccionistas.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwsaAMdtH2iy_NWNe_3G8yNgkMzdGrIaP9A&s', "price": "34.000.000", "stock": "3", "category": 'Clásico' },
    { id: 15,"name": 'Morris Mini', "description": 'Pequeño y encantador, un ícono británico.', "image": 'https://thumbs.dreamstime.com/b/mark-ii-rover-mini-cooper-montmelo-de-noviembre-aka-morris-o-austin-168293081.jpg', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
    { id: 16,"name": 'Ford Model T', "description": 'El automóvil que revolucionó el transporte.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYrf9OwbeeTj98qeR2UpwXpm4UFtuNEEEN9-j-LWhKDvsGL7ZyaTEzeFrZlsOiHHN-sk&usqp=CAU', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
    { id: 17,"name": 'Chevrolet Bel Air', "description": 'Un clásico de los años 50 con estilo.', "image": 'https://www.chevrolet.com.ar/content/dam/chevrolet/sa/argentina/espanol/index/cars/cars-subcontent/04-images/chevrolet-autos-nuevo-onix-v1.png?imwidth=960', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
    { id: 18,"name": 'Jaguar E-Type', "description": 'Un ícono del diseño automovilístico.', "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBElEsgbOnSU4FfOAaPeivEzBKgh2cC41Jg&s', "price": "23.000.000", "stock": "3", "category": 'Clásico' },
];
document.querySelector(".container").innerHTML = "Cargando"
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(renderCards(data))
    },3000)
})


function renderCards(data) {
    let cards = data.map((producto) => `
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
    `);
    document.querySelector('.container').innerHTML = cards.join("");
}





document.getElementById("buscador").addEventListener("keyup", function() {
    let search = this.value.toLowerCase();
    let filterData = data.filter(producto =>
        producto.name.toLowerCase().includes(search)
    );
    renderCards(filterData);
});

