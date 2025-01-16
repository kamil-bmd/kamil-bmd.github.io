const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
