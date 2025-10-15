import { getFavorites, toggleFavorite } from './localStorageUtil.js';

const overlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('modal-close');
const titleEl = document.getElementById('modal-title');
const imageEl = document.getElementById('modal-image');
const descEl = document.getElementById('modal-desc');
const countryEl = document.getElementById('modal-country');
const favoriteBtn = document.getElementById('modal-favorite-btn');

export function openModal() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
}

export function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
}

export function updateModal(dest, id) {
    titleEl.textContent = dest.name;
    imageEl.src = dest.image;
    imageEl.alt = dest.name;
    descEl.textContent = dest.description;
    countryEl.textContent = `Country: ${dest.country}`;

    const favs = getFavorites();
    favoriteBtn.textContent = favs.includes(id.toString()) ? '⭐ Remove Favorite' : '☆ Add Favorite';

    favoriteBtn.onclick = () => {
        toggleFavorite(id.toString());
        updateModal(dest, id);
    };
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (overlay) {
    overlay.addEventListener('click', event => {
        if (event.target === overlay) closeModal();
    });
}
