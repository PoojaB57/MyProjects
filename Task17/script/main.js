// Create card elements dynamically using JavaScript
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    const cardContent = document.createElement('p');
    cardContent.textContent = content;
    card.appendChild(cardContent);

    return card;
}

// Display 3 cards in a row
function displayCards() {
    const cardContainer = document.getElementById('card-container');

    const cards = [
        { title: 'Card 1', content: 'This is the first card.' },
        { title: 'Card 2', content: 'This is the second card.' },
        { title: 'Card 3', content: 'This is the third card.' }
    ];

    cards.forEach(cardData => {
        const card = createCard(cardData.title, cardData.content);
        cardContainer.appendChild(card);
    });
}

displayCards();
