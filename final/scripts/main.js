import { openModal, updateModal } from './modal.js';
import { getFavorites } from './localStorageUtil.js';
import destinationsData from './data.js';

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.destinations-container');

    // Dynamically render destinations
    destinationsData.forEach((dest, index) => {
        const card = document.createElement('div');
        card.classList.add('destination-card');
        card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" loading="lazy">
      <h3>${dest.name}</h3>
      <p>${dest.country}</p>
      <button class="view-details" data-id="${index}">View Details</button>
    `;
        cardsContainer.appendChild(card);
    });

    // Add event listener for modal open
    cardsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('view-details')) {
            const id = e.target.dataset.id;
            const dest = destinationsData[id];
            updateModal(dest, id);
            openModal();
        }
    });
});

