import { initNav } from './nav.js';
import { openModal, updateModal } from './modal.js';

const cards = document.querySelectorAll('.destination-card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const destination = destinations[index];
        updateModal(destination, index);
        openModal();
    });
});
import { loadDestinationsGrid } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    loadDestinationsGrid();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });


});
