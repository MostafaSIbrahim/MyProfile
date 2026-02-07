// Mobile Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

// Simple Scroll Effect for Navbar
// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         nav.style.background = '#1a252f';
//         nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
//     } else {
//         nav.style.background = '#2c3e50';
//         nav.style.boxShadow = 'none';
//     }
// });
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
navSlide();