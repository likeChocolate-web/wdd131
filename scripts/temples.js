// Toggle menu (hamburger)
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuBtn.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// Footer date info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
