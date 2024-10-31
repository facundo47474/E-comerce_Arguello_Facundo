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
    </div>
    <button class="search-button">Buscar</button>
`;

// Inserta el navbar en el documento
document.body.insertBefore(navbarContainer, document.body.firstChild);
