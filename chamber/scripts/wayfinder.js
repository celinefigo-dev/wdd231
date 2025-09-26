const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.innerHTML = "📍 " + link.textContent.trim();
    }
});