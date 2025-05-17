document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de productos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            products.forEach(product => {
                if (filterValue === 'all' || product.dataset.category.includes(filterValue)) {
                    product.style.display = 'block';
                    product.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Quick View functionality
    const quickViewButtons = document.querySelectorAll('.quickview');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const productData = {
                image: product.querySelector('img').src,
                title: product.querySelector('h3').textContent,
                price: product.querySelector('.price').textContent,
                // Add more product data as needed
            };
            showQuickView(productData);
        });
    });

    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const icon = e.currentTarget.querySelector('.material-icons');
            if (icon.textContent === 'favorite_border') {
                icon.textContent = 'favorite';
                icon.style.color = '#ff4444';
            } else {
                icon.textContent = 'favorite_border';
                icon.style.color = '';
            }
        });
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const productData = {
                id: Math.random().toString(36).substr(2, 9),
                title: product.querySelector('h3').textContent,
                price: product.querySelector('.price').textContent,
                image: product.querySelector('img').src
            };
            
            addToCart(productData);
            updateCartCount();
            showAddedToCartMessage();
        });
    });

    // Color selection
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const colorContainer = e.target.closest('.colors');
            colorContainer.querySelectorAll('.color-dot').forEach(d => {
                d.style.transform = 'scale(1)';
                d.style.border = '2px solid #fff';
            });
            e.target.style.transform = 'scale(1.2)';
            e.target.style.border = '2px solid #000';
        });
    });
});

// Utility functions
function showQuickView(productData) {
    // Implementar modal de vista rápida
    console.log('Quick view:', productData);
}

function addToCart(productData) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productData);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

function showAddedToCartMessage() {
    const message = document.createElement('div');
    message.className = 'added-to-cart-message';
    message.textContent = '¡Producto agregado al carrito!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add('show');
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 2000);
    }, 100);
}







