// Crear el navbar
const navbar = document.createElement('nav');
navbar.style.backgroundColor = '#333';
navbar.style.color = '#fff';
navbar.style.padding = '10px';
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-between';
navbar.style.alignItems = 'center';
navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.width = '100%';
navbar.style.zIndex = '1000';
navbar.style.transition = 'background-color 0.3s ease';

// Título del navbar
const title = document.createElement('div');
title.innerText = 'Venta de Autos';
title.style.fontSize = '24px';
title.style.fontWeight = 'bold';
navbar.appendChild(title);

// Crear el contenedor para los enlaces
const navLinksContainer = document.createElement('div');
navLinksContainer.style.display = 'flex';

// Lista de enlaces del navbar
const links = ['Inicio', 'Autos Nuevos', 'Autos Usados', 'Autos Clásicos', 'Contacto'];

links.forEach(link => {
    const navLink = document.createElement('a');
    navLink.innerText = link;
    navLink.href = '#'; // Cambia esto a la ruta correspondiente
    navLink.style.margin = '0 15px';
    navLink.style.color = '#fff';
    navLink.style.textDecoration = 'none';
    navLink.style.transition = 'color 0.3s ease';

    // Animaciones al pasar el mouse
    navLink.addEventListener('mouseenter', () => {
        navLink.style.color = '#FFD700'; // Cambia el color al pasar el mouse
    });
    navLink.addEventListener('mouseleave', () => {
        navLink.style.color = '#fff'; // Color original
    });

    navLinksContainer.appendChild(navLink);
});

// Añadir contenedor de enlaces al navbar
navbar.appendChild(navLinksContainer);

// Añadir navbar al body
document.body.appendChild(navbar);

// Cambiar el color del navbar al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Color más oscuro al hacer scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Color original
    }
});
