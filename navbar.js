// Selección del contenedor donde se insertará el navbar
const navbarContainer = document.createElement('div');
navbarContainer.classList.add('navbar');

// HTML del navbar
navbarContainer.innerHTML = `
    <div class="navbar-logo"><span>Auto</span>Luxury</div>
    <div class="navbar-menu">
        <a href="#inicio">Inicio</a>
        <a href="#autos">Autos</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#contacto">Contacto</a>
        <a href="./index.html">X</a>
    </div>
    <div>
     ${localStorage.getItem("session")?`<button class="btn btn-outline-success" onclick = "closeSession()">Cerrar sesión</button>`: `<a href="./login.html"><button class="btn btn-outline-success"> Iniciar sesión</button></a>`}
     </div>
`;

// Inserta el navbar en el documento
document.body.insertBefore(navbarContainer, document.body.firstChild);

function closeSession(){
    localStorage.clear();
    location.href = "./index.html";
}
