const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

export function initNav() {
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
}
