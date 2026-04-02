document.addEventListener('DOMContentLoaded', () => {
    const showcase = document.querySelectorAll('.showcase');
    const fullCard = document.querySelectorAll('.full-card');
    showcase.forEach(showcase => {
        showcase.classList.add('active');
    });
    fullCard.forEach(fullCard => {
        fullCard.classList.add('active');
    });

    const urlParams = new URLSearchParams(window.location.search);
    const filterType = urlParams.get('filterType');
    const filterValue = urlParams.get('filterValue');

    if (filterType && filterValue) {
        allCards.forEach(card => {
            const cardValue = card.dataset[filterType];

            if (cardValue && cardValue.toLowerCase() === filterValue.toLowerCase()) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

const list = document.querySelector('.list');

const message = list.createElement('button');
message.textContent = `Showing ${type}:${value} (Clear filter)`;
message.style.cursor = 'pointer';
message.classList.add('primary');
message.onclick = () => {
    window.location.href = 'index.html#filter';
};
document.body.prepend(message);