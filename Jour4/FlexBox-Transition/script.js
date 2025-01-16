const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

// Ouvrir le menu mobile
menuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

// Fermer le menu mobile
closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
