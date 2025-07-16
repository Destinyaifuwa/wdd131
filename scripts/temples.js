// Footer Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    menuButton.innerHTML = '&#9776;';
  } else {
    navMenu.style.display = 'flex';
    menuButton.innerHTML = '&times;';
  }
});
