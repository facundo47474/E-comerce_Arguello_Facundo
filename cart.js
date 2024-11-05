function getCards(){
    const list = Cards.map(
        card => ` <div class="col-xl-8" id="cards">
     <div class="card border shadow-none">
      <div class="card-body">
       <div class="d-flex align-items-start border-bottom pb-3">
        <div class="me-4">
         <img
          src="https://www.bootdey.com/image/380x380/008B8B/000000"
          alt=""
          class="avatar-lg rounded"
         />
        </div>
        <div class="flex-grow-1 overflow-hidden">
         <h5 class="text-truncate font-size-18">Waterproof Mobile Phone</h5>
         <div class="row">
          <div class="col-md-4">
           <div class="mt-3">
            <p class="text-muted mb-2">Precio</p>
            <h5 class="mb-0 mt-2">$450</h5>
           </div>
          </div>
          <div class="col-md-5">
           <div class="mt-3">
            <p class="text-muted mb-2">Cantidad</p>
            <h5 class="mb-0 mt-2">2</h5>
           </div>
          </div>
          <div class="col-md-3">
           <div class="mt-3">
            <p class="text-muted mb-2">Total</p>
            <h5>$900</h5>
          <div class="col-md-3">
            <div class="mt-3">
            <p class="text-muted mb-2">Eliminar</p>
            </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>`
    )
}