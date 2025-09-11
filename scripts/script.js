const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});



document.querySelector('button[data-filter="all"]').click();


// DATE MODIFIED
const currentYear = new Date().getFullYear();
document.querySelector("footer h2").innerText = `© 🎻 Celine Mafigu 🎻 Zimbabwe
  ${currentYear}`;


const lastModified = document.lastModified;
document.getElementById("date").textContent = lastModified;