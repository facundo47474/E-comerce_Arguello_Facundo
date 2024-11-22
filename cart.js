document.addEventListener("DOMContentLoaded", () => {
  const Carrito = JSON.parse(localStorage.getItem("cart")) || [];
  getCards(Carrito);
});

function getCards(Carrito) {
  const list = Carrito.map(
    card => `
      <div class="col-xl-8" id="cards">
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
                      <button class = "removeProduct" onclick="removeItem"({$card.prod.id})"><p class = "text-muted mb2">eliminar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
  );
  document.querySelector(".compras").innerHTML = list.join("");
}

function remove(id){
 let search = carrito.findIndex(card => card.prod.id === id );
 carrito.splice(searchIndex, 1)
 localStorage.setItem("cart", JSON.stringify(carrito))
 window.location = window.location
}