async function loadDestinations() {
    const container = document.querySelector('#destinations-container');

    try {
        const response = await fetch('data/destinations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const destinations = await response.json();

        // Generate destination cards
        destinations.forEach((place) => {
            const card = document.createElement('article');
            card.classList.add('destination-card');

            card.innerHTML = `

            <img src="${place.image}" alt="${place.name}" loading="lazy">
            <h2>${place.name}</h2>
            <p><strong>Country:</strong> ${place.country}</p>
            <p>${place.description}</p>`;

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading destinations:', error);
        container.innerHTML = `<p>Sorry, we could not load the destinations at this time.</p>`;
    }
}

loadDestinations();
