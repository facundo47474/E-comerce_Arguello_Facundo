// Instagram Feed
function loadInstagramFeed() {
    const feedGrid = document.querySelector('.feed-grid');
    const posts = [
        {
            image: 'https://source.unsplash.com/random/600x600?streetwear,1',
            likes: 256,
            comments: 24,
            caption: 'Nueva colección 🔥 #StreetStyle'
        },
        {
            image: 'https://source.unsplash.com/random/600x600?fashion,2',
            likes: 189,
            comments: 18,
            caption: 'Urban vibes 🌆 #UrbanFashion'
        },
        {
            image: 'https://source.unsplash.com/random/600x600?style,3',
            likes: 312,
            comments: 32,
            caption: 'Drop exclusivo 👟 #Sneakers'
        }
        // Añade más posts según necesites
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'instagram-post';
        postElement.innerHTML = `
            <img src="${post.image}" alt="Instagram post">
            <div class="post-overlay">
                <div class="post-stats">
                    <span><i class="material-icons">favorite</i>${post.likes}</span>
                    <span><i class="material-icons">chat_bubble</i>${post.comments}</span>
                </div>
                <p class="post-caption">${post.caption}</p>
            </div>
        `;
        feedGrid.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', loadInstagramFeed);

    // Quick Shop Modal
    const modal = document.getElementById('quickshopModal');
    const closeModal = modal.querySelector('.modal-close');
    const quickviewButtons = document.querySelectorAll('.quickview');
    const sizeButtons = modal.querySelectorAll('.size-selector button');
    let selectedSize = null;

    function openQuickShop(productData) {
        document.getElementById('modalProductImage').src = productData.image;
        document.getElementById('modalProductTitle').textContent = productData.title;
        document.getElementById('modalProductPrice').textContent = productData.price;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    quickviewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const productData = {
                image: product.querySelector('img').src,
                title: product.querySelector('h3').textContent,
                price: product.querySelector('.price').textContent
            };
            openQuickShop(productData);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedSize = button.dataset.size;
        });
    });

    // WhatsApp Integration
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    whatsappBtn.addEventListener('click', (e) => {
        gtag('event', 'whatsapp_click', {
            'event_category': 'Contact',
            'event_label': 'WhatsApp Support'
        });
    });

    // Inicialización
    loadInstagramFeed();
