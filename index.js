// Almacenamiento de usuarios registrados
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
});

function initializeAuth() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.querySelector('form').addEventListener('submit', handleLogin);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[name="login"]').value;
    const password = e.target.querySelector('input[name="password"]').value;

    // Verificar admin
    if(email === 'facundotomas018@gmail.com' && password === 'facundo098') {
        window.location.href = 'home.html';
        return;
    }

    // Verificar usuarios registrados
    const usuarioRegistrado = usuarios.find(u => u.email === email && u.password === password);
    if(usuarioRegistrado) {
        window.location.href = 'home.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function handleRegistration(event) {
    event.preventDefault();
    
    const form = event.target;
    const nombre = form.querySelector('input[name="nombre"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const usuario = form.querySelector('input[name="usuario"]').value;
    const password = form.querySelector('input[name="password"]').value;
    const confirmPassword = form.querySelector('input[name="confirm_password"]').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Guardar usuario en localStorage
    const nuevoUsuario = { nombre, email, usuario, password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    const submitButton = form.querySelector('input[type="submit"]');
    submitButton.value = 'Enviando...';
    submitButton.disabled = true;

    // Enviar datos al correo usando EmailJS
    emailjs.send(
        'service_pe3n16g',
        'template_j4586wp',
        {
            to_name: 'Facundo',
            from_name: nombre,
            reply_to: email,
            user_name: usuario,
            message: `
                Nuevo registro en el sitio:
                
                Nombre: ${nombre}
                Email: ${email}
                Usuario: ${usuario}
                Fecha: ${new Date().toLocaleString()}
            `
        }
    )
    .then(function() {
        alert('¡Registro exitoso! Ya puedes iniciar sesión');
        form.reset();
        toggleForms();
    })
    .catch(function(error) {
        console.log('Error:', error);
        alert('El registro fue exitoso pero hubo un problema al enviar la notificación.');
        form.reset();
        toggleForms();
    })
    .finally(function() {
        submitButton.value = 'Registrarse';
        submitButton.disabled = false;
    });
}

