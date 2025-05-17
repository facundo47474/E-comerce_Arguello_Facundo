// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Search bar toggle
const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.querySelector('.search-bar');
const searchClose = document.querySelector('.search-close');

searchToggle.addEventListener('click', () => {
    searchBar.classList.add('active');
});

searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
});

// Carousel functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const dotsNav = document.querySelector('.carousel-dots');

// Create dots
slides.forEach(() => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);
dots[0].classList.add('active');

// Set slide positions
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

// Move to slide function
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('active');
    targetSlide.classList.add('active');
};

// Update dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('active');
    targetDot.classList.add('active');
};

// Next button click
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.active');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    const currentDot = dotsNav.querySelector('.active');
    const nextDot = currentDot.nextElementSibling || dots[0];
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

// Previous button click
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.active');
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    const currentDot = dotsNav.querySelector('.active');
    const prevDot = currentDot.previousElementSibling || dots[dots.length - 1];
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

// Dots click
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.active');
    const currentDot = dotsNav.querySelector('.active');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});

// Auto advance slides
setInterval(() => {
    nextButton.click();
}, 5000);